<template>
  <div class="map-page-container">
    <el-amap
      :show-label="false"
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
    >
      <el-amap-mass-marks
        :visible="visible"
        :data="points"
        :styles="styles"
        @init="markerInit"
        @click="clickMarker"
      />
    </el-amap>
  </div>
  <div class="toolbar">
    <button @click="changeVisible">显隐</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import City from "../../assets/citys.json";

export default defineComponent({
  name: "Map",
  data() {
    return {
      center: [102.342785, 35.312316],
      zoom: 5,
      points: City,
      visible: true,
      styles: [
        {
          url: "https://webapi.amap.com/images/mass/mass0.png",
          anchor: [6, 6],
          size: [11, 11],
          zIndex: 3
        },
        {
          url: "https://webapi.amap.com/images/mass/mass1.png",
          anchor: [4, 4],
          size: [7, 7],
          zIndex: 2
        },
        {
          url: "https://webapi.amap.com/images/mass/mass2.png",
          anchor: [3, 3],
          size: [5, 5],
          zIndex: 1
        }
      ]
    };
  },
  methods: {
    clickMap(e) {
      console.log("click map: ", e);
    },
    initMap(map) {
      console.log("init map: ", map);
    },
    changeVisible() {
      this.visible = !this.visible;
    },
    markerInit(e) {
      console.log("marker init: ", e);
    },
    clickMarker(e) {
      console.log("marker click: ", e);
    }
  }
});
</script>

<style scoped></style>
