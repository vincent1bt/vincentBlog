var webpack = require("webpack"),
	path    = require("path"),
	srcPath = path.join(__dirname, "src");

module.exports = {
	entry: {
		react: path.join(srcPath, "module.js"),
		sitewide: path.join(srcPath, "js/siteWide/sitewide.js"),
		post: path.join(srcPath, "js/posts/post.js")
		//newPost: path.join(srcPath, "js/postsNew/newPost.js")
	},

	output: {
		path: "./../app/assets/javascripts",
		filename: '[name].js',
	},
	resolve: {
		root: srcPath,
		extensions: ["", ".js"],
		modulesDirectores: ["node_modules"]
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	debug: true,
	devtool: 'eval-cheap-module-source-map'
};
