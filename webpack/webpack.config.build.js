/**
 * @file        : webpack.config.build.js
 * @description : 生产环境打包压缩
 * @author      : YanXianPing
 * @creatTime   : 2020/11/10 10:31
 */
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/**-----------------------------------------------
 *                 webpack entry
 *----------------------------------------------*/
const getWebpackEntry = require('./utils/getWebpackEntry');
/**-----------------------------------------------
 *                    css分离
 *  MiniCssExtractPlugin default publicPath is webpackOptions.output.publicPath
 *----------------------------------------------*/
// const extractCss = new ExtractTextPlugin(`packages/[name]/dist/[name].css.css`);
const extractScss = new MiniCssExtractPlugin({filename: `[name]/dist/[name].scss.css`});
// const extractSass = new ExtractTextPlugin(`packages/[name]/dist/[name].sass.css`);
// const extractLess = new ExtractTextPlugin(`packages/[name]/dist/[name].less.css`);
// const extractStylus = new ExtractTextPlugin(`packages/[name]/dist/[name].stylus.css`);

const webpackConfigBuild = {
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
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                // 解决从node_modules内导入Vue单文件组件，它的<script>部分在转义时会被排出在外的问题
                exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file))
            },
            // {
            //     test: /\.css$/,
            //     use: extractCss.extract(
            //         [
            //             'vue-style-loader',
            //             'css-loader'
            //         ]
            //     )
            // },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.sass$/,
            //     use: extractCss.extract(
            //         [
            //             'vue-style-loader',
            //             'css-loader',
            //             {
            //                 loader: 'sass-loader',
            //                 options: {
            //                     indentedSyntax: true,
            //                     // sass-loader version >= 8
            //                     sassOptions: {
            //                         indentedSyntax: true
            //                     }
            //                 }
            //             }
            //         ]
            //     )
            // },
            // {
            //     test: /\.less$/,
            //     use: extractCss.extract(
            //         [
            //             'vue-style-loader',
            //             'css-loader',
            //             'less-loader'
            //         ]
            //     )
            // },
            // {
            //     test: /\.styl(us)?$/,
            //     use: extractCss.extract(
            //         [
            //             'vue-style-loader',
            //             'css-loader',
            //             'stylus-loader'
            //         ]
            //     )
            // }
        ]
    },
    plugins: [
        extractScss,
        new VueLoaderPlugin()
    ],
};

module.exports = webpackConfigBuild;
