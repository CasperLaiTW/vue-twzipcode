/**
 * Created by casperlai on 2016/7/2.
 */

import path from 'path';
import strip from 'strip-loader';
import webpack from 'webpack';

const dist = path.resolve(__dirname, 'dist');

export default {
  debug: false,
  devtool: false,
  output: {
    publicPath: './',
    path: dist,
    filename: 'vue-twzipcode.js',
    library: 'twzipcode',
    libraryTarget: 'umd',
  },
  entry: {
    index: './src/index',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [strip.loader('debug'), 'babel'] },
      { test: /\.vue$/, loader: 'vue' },
    ],
  },
  progress: true,
  resolve: {
    extensions: ['', '.js', '.vue'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: '"production"',
      }),
    }),
  ],
  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc'),
  },
};
