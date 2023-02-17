<template>
  <div class="main-container">
    <div class="left-container">
      <LeftMenu />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import LeftMenu from './components/Menu.vue'
</script>

<style scoped>
.main-container{
  width: 100vw;
  height: 100vh;
  display: flex;
}
.left-container{
  width: 100px;
  height: 100%;
  overflow: auto;
}
.main{
  flex: 1;
  height: 100%;
}
</style>
