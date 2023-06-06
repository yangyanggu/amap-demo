import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/",
    name: "采集经纬度",
    component: () => import("../views/map/Index.vue")
  },
  {
    path: "/map_basic",
    name: "基础地图",
    component: () => import("../views/amap/basic.vue")
  },
  {
    path: "/map_setup",
    name: "地图Setup示例",
    component: () => import("../views/amap/basic-setup.vue")
  },
  {
    path: "/getInstance",
    name: "获取组件实例",
    component: () => import("../views/amap/get-instance-setup.vue")
  }
] as RouteRecordRaw[];
