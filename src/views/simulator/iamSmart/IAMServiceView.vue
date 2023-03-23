<template>
  <div>
    <div class="navigationBar">
      <ion-icon class="navigationBarMenu" name="chevron-back-outline" @click="homeBtnTap"></ion-icon>
    </div>

    <div v-if="serviceStage === 0">
      <img src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221639970.PNG" alt="">
      <img src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221639971.PNG" alt="" @click="authorizationBtnTap">
      <img src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221639972.PNG" alt="">
    </div>
    <div v-else-if="serviceStage === 1">
      <img src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221708737.jpg" alt="">
    </div>
  </div>
</template>

<script>
import {useAssistantStore} from "@/stores/assistantStore";

export default {
  name: "IAMServiceView",
  props: ['homeBtnTap', 'authorizationBtnTap', 'serviceStage'],
  data() {
    return {
      useAssistantStore: useAssistantStore()
    }
  },
  mounted() {
    if (this.serviceStage === 0) {
      this.useAssistantStore.setMessages([
        '現在，「智方便」應用程式已經跳轉到「瀏覽器」中',
        '「瀏覽器」會自動加載授權頁面，並詢問您使用「本機」或「另一部手機」來完成授權。',
        '請您在該界面點擊「開啟智方便 >」按鈕，完成授權。',
        '如果你需要我的提示，請隨時點擊我喔！',
      ], true, false, false)
    } else if (this.serviceStage === 1) {
      this.useAssistantStore.setMessages([
        '現在，「智方便」應用程序將自動打開瀏覽器，並顯示查詢結果',
        '<span style="font-size: 1.3rem; font-weight: bold">🥳 恭 喜 你！ </span>\n您已經完成了整個流程，如果您想在沒有我的幫助下再來一次，請點擊「再試一次」按鈕。',
        '如果你需要我的提示，請隨時點擊我喔！',
      ], true, false, true)
    }
  }
}
</script>

<style scoped>
.navigationBar {
  background-color: white;
  height: 50px;
  position: sticky;
  top: 0;
  left: 0;
}

.navigationBarMenu {
  font-size: 1.5rem;
  color: black;
  position: absolute;
  height: 50px;
  left: 20px;
}

</style>