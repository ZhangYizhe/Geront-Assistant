<template>
  <div class="container">
    <div class="columns is-mobile m-0 is-vcentered" style="height: 100%">
      <template v-for="item in items">
        <div class="column p-0">
          <router-link :to="{name: item.route}">
            <div class="columns is-mobile is-multiline m-0">
              <div
                  :class="['column is-full p-0 has-text-centered', basicStore.tabBar === item.name ? 'is-active' : '']">
                <div v-if="basicStore.tabBar === item.name" v-html="item.fillIcon" style="font-size: 25px;"></div>
                <div v-else v-html="item.icon" style="font-size: 25px;"></div>
              </div>
              <div :class="['column is-full p-0 has-text-centered', basicStore.tabBar === item.name ? 'is-active' : '']"
                   style="margin-top: -5px;">
                {{ item.title }}
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {useBasicStore} from "@/stores/basicStore";

export default {
  name: "TabBar",
  data() {
    return {
      basicStore: useBasicStore(),
      items: [
        {
          id: 0,
          name: 'home',
          title: 'Home',
          icon: '<ion-icon class="icon" name="home-outline"></ion-icon>',
          fillIcon: '<ion-icon class="icon" name="home"></ion-icon>',
          route: 'home',
        },
        {
          id: 1,
          name: 'user',
          title: 'User',
          icon: '<ion-icon class="icon" name="person-outline"></ion-icon>',
          fillIcon: '<ion-icon class="icon" name="person"></ion-icon>',
          route: 'user',
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  padding-bottom: 20px;
  background-color: var(--main-color);
}

.column {
  color: black;
  font-size: 16px;
}

.columns .column .is-active {
  /*color: black;*/
  font-weight: bold;
}

</style>