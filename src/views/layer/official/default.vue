<template>
  <div class="map-page-container">
    <el-amap :center="center" :zoom="zoom">
      <el-amap-layer-default></el-amap-layer-default>
    </el-amap>
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
      visible: true
    };
  },

  methods: {
    switchVisible() {
      this.visible = !this.visible;
    }
  }
});
</script>
