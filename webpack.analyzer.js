const merge = require('webpack-merge').merge;
const webpackConfig = require('./webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const analyzerConfig = {
  plugins: [new BundleAnalyzerPlugin({ analyzerPort: 18888 })],
};

module.exports = merge(webpackConfig, analyzerConfig);
