/** @format */
import 'babel-polyfill';
import '@/assets/styles/revise.less';

import Vue from 'vue';
import App from './App';

import '@/assets/js/common';
import '@/assets/js/element-ui';
import '@/assets/images/svg/iconfont';

// 导入插件
import '@/utils/prototype';
import '@/utils/directive';
import '@/utils/filter';
import plugin from '@/plugins';
import router from '@/router';
import store from '@/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(plugin);

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
