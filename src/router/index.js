import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: () => import('../views/Resume.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
