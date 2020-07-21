'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const ENV = process.env;

console.log(ENV.XXX_ENABLE_BUNDLE_ANALYZER);

module.exports = {
  mode:
    ENV.XXX_ENABLE_BUNDLE_ANALYZER === 'true' ? 'development' : 'production',

  entry: path.resolve(__dirname, 'src', 'client', 'app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      axios: 'redaxios',
      'axios-mock-adapter': path.resolve(__dirname, 'src', 'client', 'noop.js'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV.NODE_ENV),
      'process.env.USE_MOCK_DATA': JSON.stringify(ENV.USE_MOCK_DATA),
    }),
    new HtmlWebpackPlugin({
      title: 'Amida Blog: あみぶろ',
      template: path.resolve(__dirname, 'src', 'client', 'index.html'),
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
            generateStatsFile: true,
            statsFilename: path.resolve(__dirname, 'tmp', 'stats.json'),
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
          loader: 'file-loader',
        },
      },
    ],
  },

  target: 'web',

  devtool:
    ENV.XXX_ENABLE_BUNDLE_ANALYZER === 'true' ? 'inline-source-map' : false,
};
