const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'usac-components.bundle.js'

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      },
      {
        test: /\.sass$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true
              }
            }
        ]
      }
    ]
  }
};