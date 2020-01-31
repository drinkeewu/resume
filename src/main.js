import Vue from 'vue';
import EUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/global.scss';
import './assets/font/contact/iconfont.css';
import './assets/font/fix-button/iconfont.css';
import { Flex } from '@/components';

Vue.use(EUI);
Vue.component('flex', Flex);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
