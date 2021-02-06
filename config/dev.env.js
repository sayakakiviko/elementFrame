/** @format */

'use strict';

var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEB_URL : '""',
  BASE_URL: '"/workflow"', //API地址，项目的文根
  IS_MOCK: false, //是否使用 mock
  MOCK_URL: '"http://172.16.16.206:3000/mock/908/hdzq/"', //mock平台地址
  USE_PROXY: true,  // 是否开启代理
  uploadUrl: '""'
});
