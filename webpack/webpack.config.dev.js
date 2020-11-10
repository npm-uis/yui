const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getWebpackEntry = require('./utils/getWebpackEntry');

const webpackConfigDev = {
    mode: 'development',
    entry: getWebpackEntry(true),
    output: {
        path: path.resolve(process.cwd(), 'packages/'),
        filename: `[name]/dist/[name].js`,
        libraryTarget: 'umd',
        library: ['Yui[name]']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: path.resolve(process.cwd(), 'favicon.ico')
        })
    ],
    devtool: 'inline-source-map'
};
module.exports = webpackConfigDev;
