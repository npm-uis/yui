/**
 * @file        : webpack.config.build.js
 * @description : 生产环境打包压缩
 * @author      : YanXianPing
 * @creatTime   : 2020/11/10 10:31
 */
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const getWebpackEntry = require('./utils/getWebpackEntry');

const webpackConfigDev = {
    mode: 'production',
    entry: getWebpackEntry(),
    output: {
        path: path.resolve(process.cwd(), 'packages/'),
        filename: `[name]/dist/[name].js`,
        libraryTarget: 'umd',
        library: argv['_'].indexOf('yui') >= 0 ? 'Yui' : ['Yui[name]']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: []
};
module.exports = webpackConfigDev;
