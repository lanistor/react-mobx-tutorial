var WebpackDevServer = require("webpack-dev-server")
var config = require("./webpack.config.js")
var webpack = require("webpack")


var publicPath = '/__build__'

//重新配置webpack.config.js
config.entry.app.unshift()
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8700/', 'webpack/hot/only-dev-server')
config.output.publicPath = publicPath

var server = new WebpackDevServer(webpack(config), {
	contentBase: ['./app'],
	publicPath: publicPath,
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	},
	noInfo: false,
	quiet: false
});

server.listen(8700, 'localhost', function(error, result){
	if(error){
		console.error(error)
	}else {
		console.log('Server listening on http://127.0.0.1:8700.')
	}
})
