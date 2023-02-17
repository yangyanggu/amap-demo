import { RouteRecordRaw } from "vue-router";
import Index from "../views/map/Index.vue";

export default [
  {
    path: "/",
    name: "采集经纬度",
    component: Index
  }
] as RouteRecordRaw[];
