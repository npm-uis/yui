const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
/**
 * 获取webpack的entry
 * @param dev <boolean> 是否是开发环境
 * @return {{}}
 */
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
                entry[item] = path.resolve(packagePath, 'index')
            }
        }
        return entry;
    } else {
        // only build package/yui
        if (argv['_'].indexOf('yui') >= 0) {
            entry['yui'] = path.resolve(packagesPath, 'yui/index');
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
                    entry[item] = path.resolve(packagePath, 'index')
                }
            }
            return entry;
        }
        // build specific package
        let specificPkg = '';
        argv['_'].some(item => {
            if (/^pkg-/.test(item)) {
                specificPkg = item.split('-')[1];
                return true;
            }
        });
        if (specificPkg) {
            let specificPkgPath = path.resolve(packagesPath, specificPkg);
            let specificPkgStat = fs.statSync(specificPkgPath);
            if (specificPkgStat.isDirectory()) {
                let chunkName = `${specificPkg.toLowerCase()}`;
                entry[chunkName] = path.resolve(specificPkgPath, 'index')
            }
            return entry;
        }
    }
};

module.exports = getWebpackEntry;
