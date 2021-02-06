/** @format */

/** @format */
const getPage = name => () => import('@/components/pages/' + name + '.vue');
export default [
  {
    path: '/login',
    name: 'login',
    desc: '登录',
    components: {
      default: getPage('login')
    }
  },
  {
    path: '/',
    name: 'home',
    desc: '首页',
    components: {
      default: getPage('home')
    }
  }
];
