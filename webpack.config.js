const env = process.env.NODE_ENV;
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SvgSpritePlugin = require('webpack-svg-sprite-plugin');
const { path, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCritical = require('webpack-critical');

const dist = resolve(__dirname, 'www/assets/');
console.log(dist)

module.exports = {
  entry: {
    app: './assets/scripts/main.js'
  },
  output: {
    publicPath: '/assets/',
    path: dist,
    filename: 'js/main.[hash:7].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        loaders: ['file-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          // minimize: true,
          removeComments: false,
          collapseWhitespace: true
        }  
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new SvgSpritePlugin({ filename: '../../_includes/sprite.symbol.svg' }),
    new HtmlWebpackPlugin({
      template: 'www/index.html',
      filename: '../index.html'
    }),
    new WebpackCritical({
      context: dist,
      stylesheet: 'css/main.css'
    })
  ]
};
