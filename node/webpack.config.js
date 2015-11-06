var webpack = require("webpack"),
	path    = require("path"),
	srcPath = path.join(__dirname, "src");


module.exports = {
	target: "web",
	cache: true,
	entry: {
		module: path.join(srcPath, "module.js"),
		common: ["react"]
	},
	resolve: {
		root: srcPath,
		extensions: ['', ".js"],
		modulesDirectores: ["node_modules", "src"]
	},
	output: {
		path: "./../app/assets/javascripts",
		filename: '[name].js',
		library: ['Example', '[name]'],
		pathInfo: true
	},
	pugins: [
		new webpack.optimize.CommonsChunkPlugin("common","common.js")
	],
	module: {
		loaders: [
			{test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader', query: {stage:0}}

		]
	},
	debug: true,
	devtool: 'eval-cheap-module-source-map'
};