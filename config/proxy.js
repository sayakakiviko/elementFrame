/** @format */

'use strict';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmYWY0OWZmMWZhMGY0NThiYmRmOGE1NzU2OGQ5MTk3MCIsImlhdCI6MTU5NDI5MjMzOCwiZXhwIjoxNTk0ODk3MTM4fQ.zubWNkSUcGc4HjsMBA3NVpsHTWmc573Kn_3cjgjH_E0';
const host = 'http://yunxx1.4yec.com';
module.exports = {
    '/workflow': {
      target: host,//代理的地址
      // secure: false,
      changeOrigin: true,
      headers: {
        Authorization: 'Bearer ' + token,
        Referer: host
      }
    }
  };