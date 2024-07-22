const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Script } = require('vm');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'E-commerce product page | Frontend Mentor',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
   clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
