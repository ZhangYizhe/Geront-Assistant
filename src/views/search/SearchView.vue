<template>
  <div class="app-main-canvas">
    <NavigationBar />

    <SearchInputView />

    <TabBar />
  </div>

</template>

<script>
import {useBasicStore} from "@/stores/basicStore";
import SearchInputView from "@/components/search/SearchInputView.vue";
import TabBar from "@/components/basic/TabBar.vue";
import NavigationBar from "@/components/basic/NavigationBar.vue";
export default {
  name: "SearchView",
  components: {NavigationBar, TabBar, SearchInputView},
  data() {
    return {
      basicStore: useBasicStore()
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>