const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const getWebpackEntry = (dev = false) => {
    let entry = {};
    let packagesPath = path.resolve(process.cwd(), 'packages');
    if (dev) {
        let files = fs.readdirSync(packagesPath);
        for (let i = 0; i < files.length; i++) {
            let item = files[i];
            let packagePath = path.resolve(packagesPath, item);
            let fileStat = fs.statSync(packagePath);
            if (fileStat.isDirectory()) {
                let chunkName = `${item.charAt(0).toUpperCase()}${item.substr(1)}`;
                entry[chunkName] = path.resolve(packagePath, 'index')
            }
        }
        return entry;
    } else {
        // only build package/yui
        if (argv['_'].indexOf('yui') >= 0) {
            entry['Yui'] = path.resolve(packagesPath, 'yui/index');
            return entry;
        }
        // build all packages except yui
        if (argv['_'].indexOf('all') >= 0) {
            let files = fs.readdirSync(packagesPath);
            for (let i = 0; i < files.length; i++) {
                let item = files[i];
                let packagePath = path.resolve(packagesPath, item);
                let fileStat = fs.statSync(packagePath);
                if (fileStat.isDirectory() && item !== 'yui') {
                    let chunkName = `${item.charAt(0).toUpperCase()}${item.substr(1)}`;
                    entry[chunkName] = path.resolve(packagePath, 'index')
                }
            }
            return entry;
        }
        // build specific package
        if (argv['package']) {
            let specificPkgPath = path.resolve(packagesPath, argv['package']);
            let specificPkgStat = fs.statSync(specificPkgPath);
            if (specificPkgStat.isDirectory()) {
                let chunkName = `${argv['package'].charAt(0).toUpperCase()}${argv['package'].substr(1)}`;
                entry[chunkName] = path.resolve(specificPkgPath, 'index')
            }
            return entry;
        }
    }
};

module.exports = getWebpackEntry;
