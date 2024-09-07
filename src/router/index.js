import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";
import Layout from "@/views/layout";
import Search from "@/views/search";
import Pay from "@/views/pay";
import MyOrder from "@/views/myorder";
import ProDetail from "@/views/prodetail";
import store from "@/store";
import Home from "@/views/layout/home";
import ListIndex from "@/views/search/list";
import Category from "@/views/layout/category";
import Cart from "@/views/layout/cart";
import User from "@/views/layout/user";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
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
  {
    path: "/searchlist",
    component: ListIndex,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      { path: "/home", component: Home },
      { path: "/category", component: Category },
      { path: "/cart", component: Cart },
      { path: "/user", component: User },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const authUrls = ["/pay", "/myorder"];

router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    // 不需要鉴权登录页面
    next();
    return;
  }
  const userInfo = store.state.getUserInfo();
  if (userInfo) {
    next();
  } else {
    next("/login?backUrl=" + to.fullPath);
  }
});

export default router;
