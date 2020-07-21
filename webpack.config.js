'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_ANALYZE = process.env.NODE_ENV === 'analyze';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
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
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [new UglifyJsPlugin()],
  },

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
        loader: 'file-loader',
        options: {
          name(file) {
            if (!IS_PRODUCTION) {
              return 'img/[path][name].[ext]';
            }
            return 'img/[hash].[ext]';
          }
        }
      },
    ],
  },

  target: 'web',
  mode: 'production',
};

if (!IS_PRODUCTION) {
  module.exports.devtool = 'source-map';
  module.exports.mode = 'development';
}

if (IS_ANALYZE) {
  module.exports.plugins = [
    new BundleAnalyzerPlugin()
  ];
}
