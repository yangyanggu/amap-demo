<template>
  <div class="map-page-container">
    <el-amap :center="center" :zoom="zoom">
      <el-amap-layer-labels
        ref="labels"
        :visible="visible"
        :collision="false"
        @init="init"
      >
        <el-amap-label-marker
          :position="labelOptions.position"
          :text="labelOptions.text"
          :icon="labelOptions.icon"
        ></el-amap-label-marker>
      </el-amap-layer-labels>
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
      zoom: 14,
      center: [121.5273285, 31.21515044],
      visible: true,
      labelOptions: {
        position: [121.5495395, 31.21515044],
        text: {
          content: "测试slot",
          direction: "right",
          style: {
            fontSize: 15,
            fillColor: "#fff",
            strokeColor: "rgba(255,0,0,0.5)",
            strokeWidth: 2,
            padding: [3, 10],
            backgroundColor: "yellow",
            borderColor: "#ccc",
            borderWidth: 3
          }
        },
        icon: {
          image: "https://a.amap.com/jsapi_demos/static/images/poi-marker.png",
          anchor: "bottom-center",
          size: [25, 34],
          clipOrigin: [459, 92],
          clipSize: [50, 68]
        }
      }
    };
  },

  methods: {
    switchVisible() {
      this.visible = !this.visible;
    },
    init(layer) {
      this.$refs.labels.$$add(
        new AMap.LabelMarker({
          position: [121.5273285, 31.21515044],
          opacity: 1,
          zIndex: 2,
          icon: {
            image:
              "https://a.amap.com/jsapi_demos/static/images/poi-marker.png",
            anchor: "bottom-center",
            size: [25, 34],
            clipOrigin: [459, 92],
            clipSize: [50, 68]
          },
          text: {
            content: "测试$refs $$add",
            direction: "right",
            style: {
              fontSize: 15,
              fillColor: "#fff",
              strokeColor: "rgba(255,0,0,0.5)",
              strokeWidth: 2,
              padding: [3, 10],
              backgroundColor: "yellow",
              borderColor: "#ccc",
              borderWidth: 3
            }
          }
        })
      );
      layer.add(
        new AMap.LabelMarker({
          position: [121.4973285, 31.21515044],
          opacity: 1,
          zIndex: 2,
          icon: {
            image:
              "https://a.amap.com/jsapi_demos/static/images/poi-marker.png",
            anchor: "bottom-center",
            size: [25, 34],
            clipOrigin: [459, 92],
            clipSize: [50, 68]
          },
          text: {
            content: "测试layer.add",
            direction: "right",
            style: {
              fontSize: 15,
              fillColor: "#fff",
              strokeColor: "rgba(255,0,0,0.5)",
              strokeWidth: 2,
              padding: [3, 10],
              backgroundColor: "yellow",
              borderColor: "#ccc",
              borderWidth: 3
            }
          }
        })
      );
    }
  }
});
</script>
