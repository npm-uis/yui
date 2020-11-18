const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader-v16');
/**-----------------------------------------------
 *                 webpack entry
 *----------------------------------------------*/
const getWebpackEntry = require('./utils/getWebpackEntry');

const webpackConfigDev = {
    mode: 'development',
    entry: getWebpackEntry(true),
    output: {
        path: path.resolve(process.cwd(), 'app/'),
        filename: `dist/[name].js`,
        libraryTarget: 'umd',
        library: ['app']
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(process.cwd(), 'app')
        },
        modules: ['node_modules']
    },
    module: {
        noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
        rules: [
            {
                test: /\.vue$/,
                use: ['cache-loader', 'vue-loader-v16'],
            },
            {
                test: /\.(ts|js)x?$/,
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
            },
            {
                test: /\.(png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/public/index.html',
            favicon: path.resolve(process.cwd(), 'app/public/favicon.ico'),
            chunks: ['app']
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map'
};

module.exports = webpackConfigDev;
