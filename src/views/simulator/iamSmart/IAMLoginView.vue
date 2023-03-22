<template>
<div class="canvas">
  <img class="canvas-cover" :src="backgroundCover" alt="">
  <button class="login-btn" @click="loginBtnTap">登入</button>
</div>
</template>

<script>
export default {
  name: "IAMLoginView",
  props: ['loginBtnTap'],
  data() {
    return {
      backgroundCover: "https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221414007.PNG"
    }
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