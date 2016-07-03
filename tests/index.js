/**
 * Created by casperlai on 2016/7/3.
 */

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all test files (files that ends with .spec.js)
const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../src', true, /^\.\/(?!data(\.js)?$)/);
srcContext.keys().forEach(srcContext);
