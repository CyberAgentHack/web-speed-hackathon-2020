'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'app.js'),
		css: path.resolve(__dirname, 'src', 'app.css'),
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},

	resolve: {
		extensions: ['.js', '.jsx', '.css'],
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
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
		new MiniCssExtractPlugin({
			filename: 'app.css',
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
					loader: 'url-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
		],
	},

	target: 'web',

	devtool: 'inline-source-map',

	mode: 'none',

	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
};
