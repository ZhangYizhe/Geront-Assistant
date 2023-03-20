<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from "@/components/basic/NavigationBar.vue";
import TabBar from "@/components/basic/TabBar.vue";
import {useBasicStore} from "@/stores/basicStore";

const basicStroe = useBasicStore();

</script>

<template>
  <NavigationBar v-if="basicStroe.showNavigationBar"/>

  <div class="container main-canvas">
    <RouterView />
  </div>

  <template v-if="basicStroe.showTabBar">
    <TabBar />
  </template>
</template>

<style scoped>
.main-canvas {
  background-color: var(--main-gray-color);
}

</style>
