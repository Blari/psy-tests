import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Dashboard from '@/pages/Dashboard/Dashboard';

import Error from '@/pages/Error/Error';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: Dashboard,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    },
  ],
});
