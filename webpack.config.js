var path = require('path')
var webpack = require('webpack');

module.exports = {

  entry: './src/riot.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],  
  devtool: 'source-map',
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'babel' } }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.tag$/,
        loader: 'tag',
        exclude: /node_modules/
      }
    ]
  }

}