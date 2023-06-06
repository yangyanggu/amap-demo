<template>
  <el-amap @click="clickMap" />
</template>
<script lang="ts" setup>

const clickMap = (e: any) => {
  console.log("click map: ", e);
  alert(`点击的经纬度： ${e.lnglat.toArray()}`);
};
</script>
