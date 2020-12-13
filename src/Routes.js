import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";
import Dashboard from "@/pages/Dashboard/Dashboard";

import TestPage from "@/pages/TestPage/TestPage";

import Error from "@/pages/Error/Error";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      redirect: Dashboard,
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: "/first-test",
          name: "FirstTest",
          component: TestPage,
        },
        {
          path: "*",
          name: "Error",
          component: Error,
        },
      ],
    },
  ],
});
