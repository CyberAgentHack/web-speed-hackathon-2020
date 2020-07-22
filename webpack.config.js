'use strict';

const path = require('path');

const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('node-zopfli');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.USE_MOCK_DATA': JSON.stringify(process.env.USE_MOCK_DATA),
    }),
    new HtmlWebpackPlugin({
      title: 'Amida Blog: あみぶろ',
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false,
    }),
    new CompressionPlugin({
      test: /\.(css)|(js)$/,
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
    }),
    ...(process.env.ENABLE_BUNDLE_ANALYZE
      ? [
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            generateStatsFile: true,
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

  devtool: 'cheap-source-map',

  mode: process.env.NODE_ENV,

  optimization: {
    splitChunks: {
      cacheGroups: {
        framework: {
          name: 'framework',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|immutable)[\\/]/,
          priority: 50,
        },
        time: {
          name: 'time',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](moment|moment-timezone)[\\/]/,
          priority: 40,
        },
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: (module) => {
            return module.context && module.context.includes('node_modules');
          },
          priority: 30,
          reuseExistingChunk: true,
        },
        assets: {
          name: 'assets',
          chunks: 'all',
          test: (module) => {
            return module.context && module.context.includes('assets');
          },
          priority: 20,
          reuseExistingChunk: true,
        },
      },
      maxInitialRequests: 20,
    },
  },
};
