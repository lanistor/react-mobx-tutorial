var path = require('path')
var webpack = require('webpack')
// var htmlPlugin = require("html-webpack-plugin")

module.exports = {
	entry: {
		'app': [
			path.join(__dirname, 'app', 'App.js')
		],
		'vendor': ['react', 'react-dom', 'mobx', 'mobx-react']
	},
	output: {
		path: path.join(__dirname, '__this-path-will-never-use__'),
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
		],
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
			{ test: /\.css$/, loader: 'style!css' }
		]
	},
	plugins:[
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'inline-source-map'
}