/** @format */

export default [
  {
    name: 'who',
    method: 'GET',
    desc: '获取用户信息',
    path: '/gzl/who'
  },
  {
    name: 'getList',
    method: 'POST',
    desc: '获取用户信息',
    path: '/getList',
    contentType: 'application/x-www-form-urlencoded' //修改请求头的contentType
  }
];
