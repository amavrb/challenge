const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      [`~api`]: path.join(__dirname, `./src/api`),
      [`~components`]: path.join(__dirname, `./src/components`),
      [`~hooks`]: path.join(__dirname, `./src/hooks`),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [new Dotenv()],
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
  },
};
