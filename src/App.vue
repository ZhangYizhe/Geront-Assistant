<script setup>
import AssistantView from "@/views/assistant/AssistantView.vue";

// Set the first visit
import {inject} from "vue";
import {useAssistantStore} from "@/stores/assistantStore";
const useAssistantStroe = useAssistantStore();
const $cookies = inject('$cookies');
useAssistantStroe.isFirstVisit = $cookies.get('isFirstVisit') !== null ? $cookies.get('isFirstVisit') : true

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
