const path = require('path');
const fs = require('fs');
const crypto = require("crypto-js");
const _ = require('lodash');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const projectName = 'app';
const entries = {};
const sourceDirectory = './src/main/typescript/'
const sourceDirectory2 = 'src\\main\\typescript'
fs.readdirSync(sourceDirectory).forEach(file => {
	//entries[path.parse(file).name+ "." + crypto.HmacSHA1(path.parse(file).name+ _.now(), "dev-fringe").toString()] = sourceDirectory + file;
});

function getFiles(dirPath, currentLevel, maxLevel) {
	if (currentLevel > maxLevel) {
		return;
	}
	else {
		fs.readdirSync(dirPath).forEach(function(file) {
			let filepath = path.join(dirPath, file);
			let stat = fs.statSync(filepath);
			if (stat.isDirectory()) {
				getFiles(filepath, currentLevel + 1, maxLevel);
			} else {
				let addPath = (path.parse(filepath).dir).replace(sourceDirectory2, '') + '/';
				entries[addPath.replace('\\', '/') + path.parse(filepath).name + "." + crypto.HmacSHA1(path.parse(filepath).name + _.now(), "dev-fringe").toString()] = './' + filepath;

			}
		});
	}
}
getFiles(sourceDirectory, 0, 1);

module.exports = {
	entry: entries,
	output: {
		path: path.resolve('./src/main/webapp/' + projectName),
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
			templateParameters: {
				projectName: projectName
			},
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				path.resolve(process.cwd(), './src/main/webapp/' + projectName + '/**/*')
			]
		})
	]
};