var webpack = require("webpack"),
  path    = require("path"),
  srcPath = path.join(__dirname, "src"),
  file_output = path.join(__dirname, "dist/scripts")

module.exports = {
  entry: {
    react: path.join(srcPath, "module.js"),
    sitewide: path.join(srcPath, "js/siteWide/sitewide.js"),
    post: path.join(srcPath, "js/posts/post.js")
  },

  output: {
    path: file_output,
    filename: '[name].js'
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
  }
};
