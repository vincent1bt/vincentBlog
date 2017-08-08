const webpack = require('webpack'),
      path    = require("path"),
      srcPath = path.join(__dirname, "src");

module.exports = {
  entry: {
    react: path.join(srcPath, "module.js"),
    sitewide: path.join(srcPath, "js/siteWide/sitewide.js"),
    post: path.join(srcPath, "js/posts/post.js")
  },
  output: {
    path:  path.resolve(__dirname, '../app/assets/javascripts'),
    filename: '[name].js'
  },
  resolve: {
    modules: [
      srcPath,
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  target: 'web'
};
