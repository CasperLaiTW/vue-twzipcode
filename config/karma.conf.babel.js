/**
 * Created by casperlai on 2016/7/3.
 */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';

const root = path.resolve(__dirname, '../');
const webpackConfig = merge(baseConfig, {
  devtool: '#inline-source-map',
  vue: {
    loaders: {
      js: 'isparta',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: '"testing"',
      }),
    }),
  ],
});

delete webpackConfig.entry;
// make sure isparta loader is applied before eslint
webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || [];
webpackConfig.module.preLoaders.unshift({
  test: /\.js$/,
  loader: 'isparta',
  include: path.resolve(root, 'src'),
});

// only apply babel for test files when using isparta
webpackConfig.module.loaders.some((loader) => {
  if (loader.loader === 'babel') {
    loader.include = path.resolve(root, 'tests');
    return true;
  }
});

export default (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    // this is the entry file for all our tests.
    files: ['tests/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    singleRun: true,
    coverageReporter: {
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
        { type: 'json', subdir: '.' },
      ],
    },
  });
};
