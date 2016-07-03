/**
 * Created by casperlai on 2016/7/4.
 */
import path from 'path';
import eslintFriendlyFormmatter from 'eslint-friendly-formatter';

const root = path.resolve(__dirname, '../');
const dist = path.resolve(root, 'dist');

export default {
  output: {
    publicPath: './',
    path: dist,
    filename: 'vue-twzipcode.js',
  },
  entry: {
    index: './src/index',
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')],
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: root,
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: root,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      { test: /\.jsx?$/, include: root, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' },
    ],
  },
  progress: true,
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
  },
  eslint: {
    formatter: eslintFriendlyFormmatter,
  },
  vue: {
    loaders: {},
  },
};
