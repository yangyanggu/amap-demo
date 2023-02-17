import { createRouter, createWebHistory } from "vue-router";
import routes from "./menus";

const Router = createRouter({
  history: createWebHistory(),
  routes
});

export default Router;
