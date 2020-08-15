import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio/:slug",
    name: "PortfolioTemplate",
    component: () => import("../views/PortfolioTemplate"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
