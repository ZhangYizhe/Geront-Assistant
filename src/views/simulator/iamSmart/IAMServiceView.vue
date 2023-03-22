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
export default {
  name: "IAMServiceView",
  props: ['homeBtnTap', 'authorizationBtnTap', 'serviceStage']
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