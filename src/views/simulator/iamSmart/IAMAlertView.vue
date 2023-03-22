<template>
<div class="alert-canvas">
  <div class="alert-main">
    <div class="columns is-gapless">
      <div class="column">
        <p class="title pt-4 px-3">
          iAM Smart" Wants to Use "verified.gov.hk" to Sign In
        </p>
      </div>
      <div class="column">
        <p class="description pt-1 px-3">
          This allows the app and website to share information about you.
        </p>
      </div>
      <div class="column mt-4" style="border-top: 1px solid #D1D1D1; color: #006FFE">
        <div class="columns is-mobile m-0">
          <div class="column" @click="alertCancelBtnTap">
            Cancel
          </div>
          <div class="column is-narrow p-0">
            <div  style="background-color: #D1D1D1; width: 1px; height: 100%">
            </div>
          </div>
          <div class="column" @click="alertConfirmBtnTap">
            Continue
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "IAMAlertView",
  props: ['alertCancelBtnTap', 'alertConfirmBtnTap']
}
</script>

<style scoped>
.alert-canvas {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 1000;
}

.alert-main {
  background-color: #EEEEEE;
  width: 70%;
  margin-left: 15%;
  text-align: center;
  border-radius: 10px;

  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.alert-main .title {
  font-size: 16px;
}

.alert-main .description {
  font-size: 14px;
}
</style>