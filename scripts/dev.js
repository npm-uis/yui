const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack/webpack.config.dev');
const chalk = require('chalk');

const app = express();
const compiler = webpack({...webpackConfig});
app.use(webpackDevMiddleware(compiler, {
    // webpack-dev-middleware options
}));
app.listen(4000, () => {
    console.log(`${chalk.bgGreen('[DEV]:')}${chalk.green('dev app is running at http://localhost:4000')}`);
});
