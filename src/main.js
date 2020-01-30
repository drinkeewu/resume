import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/global.scss';
import './assets/font/iconfont.css';
import { Flex } from '@/components';

Vue.component('flex', Flex);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
