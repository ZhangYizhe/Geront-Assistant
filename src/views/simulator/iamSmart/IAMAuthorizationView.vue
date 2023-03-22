<template>
  <div class="main-canvas">
    <section class="section top-canvas">
      <div class="columns is-gapless" style="color: white">
        <div class="column mb-3">
          <p style="font-size: 1.8rem">透過智方便登入</p>
        </div>
        <div class="column mb-2">
          <p style="font-size: 1.4rem">「2023年消費券計劃一查詢登記紀錄」</p>
        </div>
        <div class="column">
          <p>財政司司長辦公室</p>

        </div>
      </div>
    </section>

    <section class="section content-canvas">
      <p style="font-size: 1.2rem">
        透過智方便身分認證功能登入「2023年消費券計劃一查詢登記紀錄」
      </p>
    </section>

    <div style="width: 100%; left: 0; bottom: 0; position: fixed; z-index: 10; background-color: white">
      <button class="continue-btn" @click="authorizationConfirmBtnTap">
        繼續
      </button>

      <button class="cancel-btn" @click="homeBtnTap">
        取消
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IAMAuthorizationView",
  props: ['homeBtnTap', 'authorizationConfirmBtnTap']
}
</script>

<style scoped>
.main-canvas {
  background-color: white;
  width: 100vw;
  height: 100vh;
}

.top-canvas {
  background-color: #2B7366;
  padding-bottom: 60px;
}

.content-canvas {
  border-top-left-radius: 30px; border-top-right-radius: 30px;
  background-color: white;
  margin-top: -30px;
  z-index: 2;
  padding-bottom: 200px;
}

.continue-btn {
  border: none;
  height: 60px;
  margin-left: 5%;
  margin-bottom: 0px;
  margin-top: 20px;
  width: 90%;
  border-radius: 30px;
  background-color: #2A7466;
  color: white;
  font-size: 20px;
  box-shadow: 0 0 7px #2A7466;
}

.continue-btn:active {
  background-color: #215b51;
}

.cancel-btn {
  border: none;
  height: 60px;
  margin-left: 5%;
  margin-bottom: 30px;
  margin-top: 5px;
  width: 90%;
  color: black;
  font-size: 20px;
  background-color: transparent;
}

.cancel-btn:active {

}
</style>