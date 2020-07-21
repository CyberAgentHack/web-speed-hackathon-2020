'use strict';

const { merge } = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENV = process.env;

const baseConfig = {
  target: 'web',
  entry: [
    path.resolve(__dirname, 'src', 'client', 'dayjs.js'),
    path.resolve(__dirname, 'src', 'client', 'app.js'),
  ],
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
      bluebird: path.resolve(__dirname, 'src', 'client', 'noop.js'),
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
};

const devConfig = {
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'tmp', 'report.html'),
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, 'tmp', 'stats.json'),
    }),
  ],
  devtool: 'inline-source-map',
};

const prodConfig = {
  mode: 'production',
  devtool: false,
};

module.exports = merge(
  baseConfig,
  ENV.XXX_DEBUG === 'true' ? devConfig : prodConfig,
);
