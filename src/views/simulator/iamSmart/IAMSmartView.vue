<template>
<div class="container">
  <Transition>
    <template v-if="app.viewsIndex === 0">
      <img v-if="app.viewsIndex === 0" class="cover" :src="app.cover" alt="">
    </template>
    <template v-else-if="app.viewsIndex === 1">
      <IAMLoginView :loginBtnTap="loginBtnTap" />
    </template>
    <template v-else-if="app.viewsIndex === 2">
      <IAMHomeView :scanBtnTap="scanBtnTap" :launchServiceBtnTap="launchServiceBtnTap" />
    </template>
    <template v-else-if="app.viewsIndex === 3">
      <IAMScanView :homeBtnTap="homeBtnTap" />
    </template>
  </Transition>

  <IAMAlertView v-if="app.alertView.display" :alertCancelBtnTap="alertCancelBtnTap" :alertConfirmBtnTap="alertConfirmBtnTap" />


</div>
</template>

<script>
import IAMLoginView from "@/views/simulator/iamSmart/IAMLoginView.vue";
import IAMHomeView from "@/views/simulator/iamSmart/IAMHomeView.vue";
import IAMScanView from "@/views/simulator/iamSmart/IAMScanView.vue";
import IAMAlertView from "@/views/simulator/iamSmart/IAMAlertView.vue";

export default {
  name: "iamSmartView",
  components: {IAMAlertView, IAMScanView, IAMHomeView, IAMLoginView},
  data() {
    return {
      app: {
        cover: "https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221414007.PNG",

        viewsIndex: 0,

        alertView: {
          display: false
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.app.viewsIndex = 1
    }, 1000)
  },
  methods: {
    loginBtnTap() {
      this.homeBtnTap();
    },

    launchServiceBtnTap() {
      this.app.alertView.display = true;
    },

    homeBtnTap() {
      this.app.viewsIndex = 2
    },

    scanBtnTap() {
      this.app.viewsIndex = 3
    },

    alertCancelBtnTap() {
      this.app.alertView.display = false;
    },

    alertConfirmBtnTap() {
      this.app.alertView.display = false;
    }
  }
}
</script>

<style scoped>
.cover {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.loginView {

}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>