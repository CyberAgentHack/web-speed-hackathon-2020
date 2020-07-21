'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const ENV = process.env;

console.log(ENV.XXX_ENABLE_BUNDLE_ANALYZER);

module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, 'src', 'app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV.NODE_ENV),
      'process.env.USE_MOCK_DATA': JSON.stringify(ENV.USE_MOCK_DATA),
    }),
    new HtmlWebpackPlugin({
      title: 'Amida Blog: あみぶろ',
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false,
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['ja'],
    }),
    ...(ENV.XXX_ENABLE_BUNDLE_ANALYZER === 'true'
      ? [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.resolve(__dirname, 'tmp', 'report.html'),
            openAnalyzer: false,
          }),
        ]
      : []),
  ],

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },

  target: 'web',

  devtool: 'inline-source-map',

  mode: 'none',
};
