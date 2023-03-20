<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from "@/components/basic/NavigationBar.vue";
import TabBar from "@/components/basic/TabBar.vue";
import {useBasicStore} from "@/stores/basicStore";

const basicStroe = useBasicStore();

</script>

<template>
  <NavigationBar v-if="basicStroe.showNavigationBar"/>

  <section :class="['hero', basicStroe.showNavigationBar ? 'is-fullheight-with-navbar' : 'is-fullheight']">
    <div class="hero-body">
      <RouterView />
    </div>
    <div class="hero-foot" v-if="basicStroe.showTabBar">
      <TabBar />
    </div>
  </section>
</template>

<style scoped>

.hero-body {
  background-color: var(--main-gray-color);
}
.hero-foot {
  background-color: var(--main-color);
}

</style>
