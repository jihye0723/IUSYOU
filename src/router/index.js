import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/mainpage",
  },
  {
    path: "/mainpage",
    name: "mainpage",
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/diary",
    name: "diary",
    component: () => import("../views/DiaryView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("../views/MyPageView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
