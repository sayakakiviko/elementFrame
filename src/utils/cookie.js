/** @format */
/** 关于token的相关设置 */

import cookie from 'js-cookie';

function getToken() {
  return cookie.get('token');
}

function setToken(token) {
  cookie.set('token', token);
}

function removeToken() {
  cookie.remove('token');
}

export default {
  getToken,
  setToken,
  removeToken
};
