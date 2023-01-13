import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import NProgress from "nprogress";
import HomeView from "../views/HomePage/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About/AboutPage.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/account-setting",
    name: "AccountSetting",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/AccountSetting/AccountSetting.vue"
      ),
    meta: {
      title: "Account Setting",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ContactUs/ContactUs.vue"
      ),
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Service/ServicePage.vue"
      ),
    meta: {
      title: "Services",
    },
  },
  {
    path: "/pages",
    name: "Pages",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pages/ThePages.vue"),
    meta: {
      title: "Pages",
    },
  },
  // Auth
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auth/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auth/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "ResetPassword",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auth/ResetPassword.vue"),
    meta: {
      title: "ResetPassword",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Pollock | ${to.meta?.title}`;
  next();
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
