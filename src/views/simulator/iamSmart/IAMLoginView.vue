<template>
<div class="canvas">
  <img class="canvas-cover" :src="backgroundCover" alt="">
  <button class="login-btn" @click="loginBtnTap">登入</button>
</div>
</template>

<script>
import {useAssistantStore} from "@/stores/assistantStore";

export default {
  name: "IAMLoginView",
  props: ['loginBtnTap'],
  data() {
    return {
      useAssistantStore: useAssistantStore(),
      backgroundCover: "https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221414007.PNG"
    }
  },
  mounted() {
    this.useAssistantStore.setMessages([
      '歡迎使用「智方便」應用程序',
      '在該界面，你需要點擊「登入」按鈕來驗證身份，如果驗證成功，則會進入應用程式「主界面」',
      '如果你需要我的提示，請隨時點擊我喔！',
    ], true, false, false)
  }
}
</script>

<style scoped>
.canvas-cover {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 0.5;
}

.login-btn {
  border: none;
  position: fixed;
  top: 75vh;
  left: 5%;
  width: 90%;
  height: 60px;
  border-radius: 30px;
  background-color: #2A7466;
  color: white;
  font-size: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.64);
}

.login-btn:active {
  background-color: #215b51;
}

</style>