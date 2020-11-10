const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../webpack/webpack.config.dev');
const webpackDevServerConfig = {
    contentBase: path.resolve(process.cwd(), 'packages'),
    hot: true
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, webpackDevServerConfig);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, webpackDevServerConfig);
server.listen(4000, 'localhost', () => {
    console.log('dev server listening on port 4000')
});


// compiler.run((err, stats) => {
//     if (err || stats.hasErrors()) {
//         // TODO 错误处理
//     }
// });
