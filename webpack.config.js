'use strict';

module.exports = {
  entry: __dirname + '/demo.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /.*\.js$/,
      loaders: ['eslint'],
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.css/,
      loaders: ['style', 'css']
    }, {
      test: /\.html$/,
      loader: 'html',
      exclude: /node_modules/
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }, {
      test: /\.(png|gif)$/,
      loader: 'file-loader'
    }]
  },
  devServer: {
    port: 8000,
    inline: true
  }
};
