<script setup>
import AssistantView from "@/views/assistant/AssistantView.vue";

// Set the first visit
import {inject} from "vue";
import {useAssistantStore} from "@/stores/assistantStore";
const useAssistantStroe = useAssistantStore();
const $cookies = inject('$cookies');

useAssistantStroe.cookies = $cookies;
if ($cookies.get('isFirstVisit') !== null) {
  useAssistantStroe.isFirstVisit = $cookies.get('isFirstVisit') === 'true';
} else {
  useAssistantStroe.isFirstVisit = true
}


</script>

<template>
<!--  <router-view v-slot="{ Component, route }">-->
<!--    <transition :name="route.meta.transition" mode="out-in">-->
<!--      <component :is="Component"/>-->
<!--    </transition>-->
<!--  </router-view>-->

  <router-view></router-view>

  <AssistantView />
</template>

<style scoped>

</style>
