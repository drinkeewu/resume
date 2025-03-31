import Vue from 'vue';
import { Flex } from '@/components';

import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/global.scss';
import './assets/font/fix-button/iconfont.css';
import './assets/font/contact/iconfont.css';
import 'animate.css/animate.min.css';
import './styles/print.css';

Vue.component('flex', Flex);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
