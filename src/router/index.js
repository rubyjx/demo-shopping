import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";
import Layout from "@/views/layout";
import Search from "@/views/search";
import Pay from "@/views/pay";
import MyOrder from "@/views/myorder";
import ProDetail from "@/views/prodetail";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    component: Layout,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/pay",
    component: Pay,
  },
  {
    path: "/myorder",
    component: MyOrder,
  },
  {
    path: "/prodetail/:id",
    component: ProDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 判断用户是否已登录
    if (!store.state.isAuthenticated) {
      // 未登录，重定向到登录页面
      next({
        path: "/login",
        query: { redirect: to.fullPath }, // 登录后重定向回到原来想访问的页面
      });
    } else {
      // 已登录，允许访问
      next();
    }
  } else {
    // 该路由不需要身份验证，直接访问
    next();
  }
});

export default router;
