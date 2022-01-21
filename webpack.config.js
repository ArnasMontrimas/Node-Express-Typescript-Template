const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [nodeExternals()]
};