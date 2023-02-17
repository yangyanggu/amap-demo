<template>
  <div class="menu-list">
    <div class="menu-item" v-for="item in menus" :key="item.path" @click="clickMenu(item)" >
      {{item.name}}
    </div>
  </div>
</template>
<script lang="ts" setup>
import menus from '../router/menus'
import {useRouter} from 'vue-router'

const router = useRouter()

const clickMenu = (e: any) => {
  router.push({
    path: e.path
  })
}
</script>
<style scoped>
  .menu-list{
    height: 100%;
    padding: 5px;
  }
  .menu-item{
    padding:5px;
    background: #dcdcdc;
    text-align: center;
    cursor: pointer;
  }
</style>