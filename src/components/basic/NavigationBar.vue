<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/pwa-192x192.png" alt="" style="border-radius: 5px; height: 60%">
          <p class="header-title pl-2" style="font-size: 1.2rem">
            Geront Assistant
          </p>
        </a>

        <a role="button" :class="['navbar-burger', showList ? 'is-active' : '']" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample" @click="showList = !showList">
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
.navbar {
  position: sticky;
  top: 0;
  left: 0;
}
.header-title {
  font-weight: bold;
}

.navbar-burger:hover {
  background-color: white;
}

.navbar-item.is-active {
  color: var(--main-color);
  font-weight: bold;
}
</style>