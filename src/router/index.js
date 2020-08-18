import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/portfolio/:slug",
    name: "PortfolioTemplate",
    component: () => import("../views/PortfolioTemplate"),
    props: true,
  },
  {
    path: "/:slug/:projectSlug",
    name: "ProjectTemplate",
    component: () => import("../views/ProjectTemplate"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
