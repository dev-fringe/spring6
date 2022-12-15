const path  = require('path');

module.exports = {
	entry: './src/main/typescript/index.ts',
	output: {
		path: path.resolve('./src/main/webapp'),
		filename: '[name].js'
	},
	experiments: {
		outputModule: true
	},
	resolve: {
		extensions: ['.ts']
	},
	devtool: "source-map",
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
	}
};