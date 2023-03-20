<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <p class="header-title" style="font-size: 1.2rem">
          Geront Assistant
        </p>
      </a>

      <a role="button" :class="['navbar-burger', showList ? 'is-active' : '']" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showList = !showList">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" :class="['navbar-menu', showList ? 'is-active' : '']">
      <div class="navbar-start">
        <a :class="['navbar-item', basicStore.navigationBar === 'home' ? 'is-active' : '']">
          Home
        </a>
      </div>

<!--      <div class="navbar-end">-->
<!--        <div class="navbar-item">-->
<!--          -->
<!--        </div>-->
<!--      </div>-->
    </div>
  </nav>
</template>

<script>
import {useBasicStore} from "@/stores/basicStore";

export default {
  name: "NavigationBar",
  data() {
    return {
      showList: false,
      basicStore: useBasicStore()
    }
  },
}
</script>

<style scoped>
.header-title {
  font-weight: bold;
}
</style>