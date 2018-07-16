const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const webpackHtmlPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
	mode: process.env.NODE_ENV || 'production',
	target: 'web',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1024
					}					
				}]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpackHtmlPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: isDev ? '"development"' : '"production"'
			}
		})
	]
}

if(isDev){
	config.devtool = '#cheap-module-eval-source-map';
	config.devServer = {
		port: 80,
		host: '0.0.0.0',
		overlay: {
			errors: true
		},
		hot: true
	};
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	);
}

module.exports = config;