const path = require('path');
const fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const _ = require('lodash');
const crypto = require("crypto-js");
const projectName = 'app'; //TODO
const entries = {}; //TODO
const sourceDirectory = './src/main/typescript/' //TODO
const sourceDirectory2 = 'src\\main\\typescript' // windows file system TODO

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
				//TODO
				let addPath = ((path.parse(filepath).dir).replace(sourceDirectory2, '') + '/').replace('\\', '/');
				let hash = crypto.HmacSHA1(path.parse(filepath).name + _.now(), "dev-fringe").toString();
				entries[addPath + path.parse(filepath).name + "." + hash] = './' + filepath;
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