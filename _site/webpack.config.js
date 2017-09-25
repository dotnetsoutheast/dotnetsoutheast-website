const env = process.env.NODE_ENV;
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SvgSpritePlugin = require('webpack-svg-sprite-plugin');
const { path, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCritical = require('webpack-critical');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const wwwdir = resolve(__dirname, 'www/');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './assets/scripts/main.js',
  },
  output: {
    publicPath: '/',
    path: wwwdir,
    filename: 'assets/js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        loaders: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              query: {
                sourceMap: true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
          removeComments: false,
          collapseWhitespace: true,
        },
      },
    ],
  },
  plugins: [
    // new ExtractTextPlugin('assets/css/main.[hash:7].css'),
    new ExtractTextPlugin('assets/css/main.css'),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'www/index.html'),
      filename: resolve(__dirname, 'www/index.html'),
    }),
    // new WebpackCritical({
    //   context: wwwdir,
    //   stylesheet: '/assets/css/main.css',
    // }),
    new SvgSpritePlugin({ filename: '../../_includes/sprite.symbol.svg' }),
    new webpack.WatchIgnorePlugin([
      resolve(__dirname, './www/'),
      resolve(__dirname, './_layouts/**/*.html'),
    ]),
    // new WebpackShellPlugin({
    //   onBuildStart: ['jekyll b --watch --config config.yml'],
    //   onBuildEnd: 'inline-critical --html www/index.html --css www/assets/css/styles.css',
    // }),
  ],
  watchOptions: {
    aggregateTimeout: 1000,
  },
};
