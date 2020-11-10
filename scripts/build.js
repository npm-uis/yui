/**
 * @file        : build.js
 * @description : 打包压缩/packages/*下的文件入口
 * @author      : YanXianPing
 * @creatTime   : 2020/11/10 13:05
 */
/**-----------------------------------------------
 * npm run build yui : 指定压缩yui这个包（因为yui这个包导出的library和其他包不同）
 * npm run build all : 压缩除了yui这个包的其他包
 * npm run build --package=packageName : 指定压缩文件夹名为packageName的包
 *----------------------------------------------*/
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (start) : 主要逻辑
cleanPkgDist();
const webpackConfig = require('../webpack/webpack.config.build');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
        // TODO 错误处理
        return;
    }
    console.log('build success')
});
// (end)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/**
 * 根据build传入的参数删除package下的dist文件夹
 */
function cleanPkgDist() {
    let packagesPath = path.resolve(process.cwd(), 'packages');
    // delete package/yui/dist
    if (argv['_'].indexOf('yui') >= 0) {
        let pkgDistPath = path.resolve(packagesPath, 'yui/dist');
        deleteFolder(pkgDistPath);
        return false;
    }
    // delete all packages except yui dist
    if (argv['_'].indexOf('all') >= 0) {
        let files = fs.readdirSync(packagesPath);
        files.forEach(file => {
            if (file !== 'yui') {
                let pkgDistPath = path.resolve(packagesPath, file, 'dist');
                deleteFolder(pkgDistPath);
            }
        });
        return false;
    }
    // delete specific package/dist
    if (argv['package']) {
        let pkgDistPath = path.resolve(packagesPath, argv['package'], 'dist');
        deleteFolder(pkgDistPath);
        return false;
    }
}

/**
 * 删除文件夹和文件夹内部的内容
 * @param folder <string> 需要删除的文件夹路径
 */
function deleteFolder(folder) {
    if (fs.existsSync(folder)) {
        let files = fs.readdirSync(folder);
        files.forEach(file => {
            let filePath = path.resolve(folder, file);
            if (fs.statSync(filePath).isDirectory()) {
                deleteFolder(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });
        fs.rmdirSync(folder);
    }
}
