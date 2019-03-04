const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer : {
    contentBase : './dist'
  },
  module : {
    rules : [
      {
        test :/\.js$/,
        exclude : /node_modules/,
        loader : "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin({
      title : "Code splitting POC",
      template : "./src/index.html"
    })
  ]
};
