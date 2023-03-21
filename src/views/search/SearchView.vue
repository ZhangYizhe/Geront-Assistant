<template>
  <SearchInputView />

</template>

<script>
import {useBasicStore} from "@/stores/basicStore";
import SearchInputView from "@/components/search/SearchInputView.vue";
export default {
  name: "SearchView",
  components: {SearchInputView},
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