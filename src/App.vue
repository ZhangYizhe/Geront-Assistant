<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view name="navigationBar" />

  <div class="app-main-canvas">
    <router-view />
  </div>

  <router-view name="tabBar" />
</template>

<style scoped>
.app-main-canvas {
  margin-bottom: 90px;
}
</style>
