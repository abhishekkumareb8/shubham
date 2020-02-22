import Vue from 'vue';
import Router from 'vue-router';
import People from '@/components/People';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'People',
      component: People
    }
  ]
});
