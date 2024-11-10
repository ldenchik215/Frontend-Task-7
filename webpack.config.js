const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin  = require("copy-webpack-plugin")

module.exports = {
	mode: 'development',
	entry: {
		filename: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
      title: 'CPS',
      template: './src/index.html',
      inject: true,
    }),
		new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
		new CopyWebpackPlugin({
			patterns: [
      {
        from: './src/img',
        to: 'img',
      },
    ]})
	],
	module: {
		rules: [
			{
			test: /\.scss$/i,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
			{
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
        ]
      },
			{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
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
	},
}