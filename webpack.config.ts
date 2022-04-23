import path from 'path';

import type { Configuration } from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'process';

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

export default {
  mode: nodeEnv,
  entry: 'sample/app.ts',
  output: path.resolve(__dirname, 'dist/sample/'),
  target: 'web',
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tx$/
        , use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    compress: true,
    port: 3000,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin(),

  ],

} as Configuration;
