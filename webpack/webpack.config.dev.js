const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
/**-----------------------------------------------
 *                 webpack entry
 *----------------------------------------------*/
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
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                // 解决从node_modules内导入Vue单文件组件，它的<script>部分在转义时会被排出在外的问题
                exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file))
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: path.resolve(process.cwd(), 'favicon.ico'),
            chunks: ['yui']
        }),
        new VueLoaderPlugin()
    ],
    devtool: 'inline-source-map'
};

module.exports = webpackConfigDev;
