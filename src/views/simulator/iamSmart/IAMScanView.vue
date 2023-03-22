<template>
  <div class="main-canvas">
    <div class="main-canvas-mask">

      <div class="navigationBar">
        <ion-icon class="navigationBarMenu" name="chevron-back-outline" @click="homeBtnTap"></ion-icon>
      </div>

      <div class="camera-square">
        <p style="margin-top: -70px; color: white; text-align: center; font-weight: 500; font-size: 1.2rem; width: 120%; margin-left: -10%">
          請將二維碼 (QR Code) 放入框內掃描
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IAMScanView",
  props: ['homeBtnTap']
}
</script>

<style scoped>
.main-canvas {
  width: 100vw;
  height: 100vh;
  background-color: white;
}

.navigationBar {
  background-color: transparent;
  height: 50px;
  position: sticky;
  top: 0;
  left: 0;
}

.navigationBarMenu {
  font-size: 1.5rem;
  color: white;
  position: absolute;
  height: 50px;
  left: 20px;
  top: 10px;
}


.main-canvas-mask {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.camera-square {
  position: absolute;
  width: 70vw;
  height: 70vw;
  background-color: white;
  top: 50%;
  left: 15vw;
  margin-top: -35vw;
}
</style>