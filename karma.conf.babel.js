/**
 * Created by casperlai on 2016/7/3.
 */
import webpackConf from './webpack.production.config.babel';
delete webpackConf.entry;
delete webpackConf.output.library;
delete webpackConf.output.libraryTarget;

export default (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    // this is the entry file for all our tests.
    files: ['tests/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'tests/index.js': ['webpack'],
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true,
    },
    singleRun: true,
  });
};
