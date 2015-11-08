var webpack = require("webpack"),
	path    = require("path"),
	srcPath = path.join(__dirname, "src"),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	target: "web",
	cache: true,
	entry: {
		react: path.join(srcPath, "module.js"),
		sitewide: path.join(__dirname, "src/siteWide/nav.js"),
		post: path.join(__dirname, "src/posts/post.js")
	},

	output: {
		path: "./../app/assets/javascripts",
		filename: '[name].js',
		//library: ['Example', '[name]'],
		pathInfo: false
	},
	resolve: {
		root: srcPath,
		extensions: ['', ".js"],
		modulesDirectores: ["node_modules", "src"]
	},
	module: {
		loaders: [
			{
				test: /\.js?$/, exclude: /node_modules/,
				loader: 'babel-loader',
				query: {stage:0}
			},
			{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
			{
        		test: /\.sass$/,
        		loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      		}
		]
	},
	pugins: [
		new webpack.optimize.CommonsChunkPlugin("common.js"),
		new ExtractTextPlugin("[name].css")
	],
	debug: true
	//devtool: 'eval-cheap-module-source-map'
};
