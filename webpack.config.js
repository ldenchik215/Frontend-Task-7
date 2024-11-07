const path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		filename: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	modules: {
		rules: [
			{
			test: /\.scss$/i,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		]
	},
	devServer: {
		port: 9000,
		compress: true,
		hot: true,
		static: {
			directory: path.join(__dirname, 'dist')
		}
	}
}