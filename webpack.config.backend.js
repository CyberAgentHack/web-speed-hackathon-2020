'use strict';

const { merge } = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const ENV = process.env;

const baseConfig = {
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    path.resolve(__dirname, 'src', 'client', 'dayjs.js'),
    path.resolve(__dirname, 'src', 'backend', 'server.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist', 'backend'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV.NODE_ENV),
      'process.env.USE_MOCK_DATA': JSON.stringify(ENV.USE_MOCK_DATA),
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
    ],
  },
};

const prodConfig = {
  mode: 'development',
  devtool: false,
};

module.exports = merge(baseConfig, prodConfig);
