/**
 * Created by casperlai on 2016/7/2.
 */
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';

const webpackConfig = merge(baseConfig, {
  debug: false,
  devtool: false,
  output: {
    library: 'twzipcode',
    libraryTarget: 'umd',
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
});

export default webpackConfig;