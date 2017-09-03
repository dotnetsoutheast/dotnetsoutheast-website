const env = process.env.NODE_ENV;
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/assets/scripts/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'www/assets/'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};
