var WebpackDevServer = require("webpack-dev-server")
var config = require("./webpack.config.js")
var webpack = require("webpack")

var publicPath = '/__example__build__'

//重新配置webpack.config.js
config.entry.app.unshift()
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8601/', 'webpack/hot/only-dev-server')
config.output.publicPath = publicPath

var server = new WebpackDevServer(webpack(config), {
	contentBase: ['./example'],
	publicPath: publicPath,
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	},
	noInfo: false,
	quiet: false
});

process.on('uncaughtException', function (err) {
  logger.error('--uncaughtException--', err);
});

server.listen(8601, 'localhost', function(error, result){
	if(error){
		console.error(error)
	}else {
		console.log('Server listening on http://127.0.0.1:8601.')
	}
})

