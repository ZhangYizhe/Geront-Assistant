<template>
  <div class="nb-canvas">
    <div class="columns is-mobile is-gapless is-vcentered">
      <div class="header-btn column is-narrow has-text-centered mx-3">
        <div class="header-btn">
          <template v-if="this.$route.meta.showBackBtn">
            <a @click="this.$router.go(-1)">
              <div class="columns is-mobile is-gapless is-vcentered">
                <div class="column is-narrow" style="margin-top: 8px">
                  <ion-icon name="chevron-back-outline" style="font-size: 20px"></ion-icon>
                </div>
                <div class="column is-narrow">
                  <span style="font-size: 18px">Back</span>
                </div>
              </div>
            </a>
          </template>
        </div>
      </div>
      <div class="column header-title has-text-centered">
        {{ this.$route.meta.title }}
      </div>
      <div class="column is-narrow has-text-centered mx-3">
        <div class="header-btn">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useBasicStore} from "@/stores/basicStore";

export default {
  name: "NavigationBar",
  data() {
    return {
      showList: false,
      basicStore: useBasicStore(),
    }
  },
}
</script>

<style scoped>
.nb-canvas {
  position: sticky;
  top: 0;
  left: 0;
  height: 60px;
  background-color: white;

  box-shadow: 0 0 4px #dadada;
  z-index: 1000;
}

.nb-canvas .columns {
  height: 100%;
}

.header-title {
  font-weight: bold;
  font-size: 1.25rem;

  overflow: hidden;
}

.header-btn {
  width: 75px;
  overflow: hidden;
}
</style>