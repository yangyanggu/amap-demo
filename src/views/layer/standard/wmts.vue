<template>
  <div class="map-page-container">
    <el-amap :center="center" :zoom="zoom">
      <el-amap-layer-wmts
        :visible="visible"
        :url="url"
        :blend="false"
        :params="params"
      ></el-amap-layer-wmts>
    </el-amap>
  </div>
  <div class="toolbar">
    <button @click="switchVisible()">{{ visible ? "隐藏" : "显示" }}</button>
  </div>
</template>

<style></style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      visible: true,
      url: "https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/",
      params: {
        Layer: "0",
        Version: "1.0.0",
        Format: "image/png",
        TileMatrixSet: "EPSG:3857"
      }
    };
  },

  methods: {
    switchVisible() {
      this.visible = !this.visible;
    }
  }
});
</script>
