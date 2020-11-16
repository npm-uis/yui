const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/webpack.config.dev');

const compiler = webpack({...webpackConfig});
// devServerConfig
const devServerConfig = Object.assign({}, webpackConfig.devServer, {
    port: '4000',
    // // webpack will add 'webpack.HotModuleReplacementPlugin' automatically.
    hot: true,
    contentBase: path.resolve(process.cwd(), 'app/public'),
    watchContentBase: true

});
const app = new webpackDevServer(compiler, devServerConfig);
app.listen(devServerConfig.port, () => {
    console.log(`${chalk.bgGreen('[DEV]:')}${chalk.green('dev app is running at http://localhost:4000')}`);
});
