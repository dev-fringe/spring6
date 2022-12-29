const path  = require('path');
const fs = require('fs');
const crypto = require("crypto-js");
const _ = require('lodash');
var HtmlWebpackPlugin = require('html-webpack-plugin')

const entries = {};
const sourceDirectory = './src/main/typescript/'
fs.readdirSync(sourceDirectory).forEach(file => {
  entries[path.parse(file).name+ "." + crypto.HmacSHA1(path.parse(file).name+ _.now(), "dev-fringe").toString()] = sourceDirectory + file;
});
module.exports = {
	entry: entries,
	output: {
		path: path.resolve('./src/main/webapp'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts']
	},
	mode: 'production',
	module: {
		rules: [{
			test: /\.ts$/,
			loader: 'esbuild-loader',
			options: {
				loader: 'ts',
				target: 'es2020'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true, // hash for cache bursting
			template: "./src/main/resources/templates/template.html", // source template
			minify: true, // should html file be minified?
			inject: false,
		})
	]
};