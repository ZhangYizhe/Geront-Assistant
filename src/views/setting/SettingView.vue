<template>
  <div class="app-main-canvas">
    <NavigationBar />

    <section class="section pt-5">
      <div class="columns">
        <div class="column">
          <button class="button is-danger" style="width: 100%" @click="cleanCacheBtnTap">
            清理緩存
          </button>
        </div>
      </div>
    </section>


    <TabBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/basic/NavigationBar.vue";
import TabBar from "@/components/basic/TabBar.vue";
import {useAssistantStore} from "@/stores/assistantStore";

export default {
  name: "SettingView",
  components: {TabBar, NavigationBar},
  data() {
    return {
      useAssistantStore: useAssistantStore()
    }
  },
  methods: {
    cleanCacheBtnTap() {
      this.useAssistantStore.firstVisit(true);
    }
  }
}
</script>

<style scoped>

</style>