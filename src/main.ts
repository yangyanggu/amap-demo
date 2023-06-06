import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Router from "./router";

import "@vuemap/vue-amap/dist/style.css";
import VueAMap, { initAMapApiLoader } from "@vuemap/vue-amap";
import VueAMapLoca from "@vuemap/vue-amap-loca";
import VueAMapExtra from "@vuemap/vue-amap-extra";

initAMapApiLoader({
  key: "8ebf373a63c7ea74828ea31d41917625",
  securityJsCode: "ba47b8bba3e638feef8ae6941f1c32b5"
});

createApp(App).use(Router).use(VueAMap).use(VueAMapLoca).use(VueAMapExtra).mount("#app");
