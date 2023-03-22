<template>
  <div class="container">
    <template v-if="app">
      <Transition>
        <template v-if="app.viewsIndex === 0">
          <img v-if="app.viewsIndex === 0" class="cover" :src="app.cover" alt="">
        </template>
        <template v-else-if="app.viewsIndex === 1">
          <IAMLoginView :loginBtnTap="loginBtnTap"/>
        </template>
        <template v-else-if="app.viewsIndex === 2">
          <IAMHomeView :scanBtnTap="scanBtnTap" :launchServiceBtnTap="launchServiceBtnTap"/>
        </template>
        <template v-else-if="app.viewsIndex === 3">
          <IAMScanView :homeBtnTap="homeBtnTap"/>
        </template>
        <template v-else-if="app.viewsIndex === 4">
          <IAMServiceView :homeBtnTap="homeBtnTap" :authorizationBtnTap="authorizationBtnTap"
                          :serviceStage="app.serviceStage"/>
        </template>
        <template v-else-if="app.viewsIndex === 5">
          <IAMAuthorizationView :homeBtnTap="homeBtnTap" :authorizationConfirmBtnTap="authorizationConfirmBtnTap"/>
        </template>
      </Transition>

      <IAMAlertView v-if="app.alertView.display" :alertCancelBtnTap="alertCancelBtnTap"
                    :alertConfirmBtnTap="alertConfirmBtnTap"/>
    </template>
  </div>
</template>

<script>
import IAMLoginView from "@/views/simulator/iamSmart/IAMLoginView.vue";
import IAMHomeView from "@/views/simulator/iamSmart/IAMHomeView.vue";
import IAMScanView from "@/views/simulator/iamSmart/IAMScanView.vue";
import IAMAlertView from "@/views/simulator/iamSmart/IAMAlertView.vue";
import IAMServiceView from "@/views/simulator/iamSmart/IAMServiceView.vue";
import IAMAuthorizationView from "@/views/simulator/iamSmart/IAMAuthorizationView.vue";

export default {
  name: "iamSmartView",
  components: {IAMAuthorizationView, IAMServiceView, IAMAlertView, IAMScanView, IAMHomeView, IAMLoginView},
  data() {
    return {
      app: null
    }
  },
  mounted() {
    this.initApp()

    setTimeout(() => {
      this.app.viewsIndex = 1
    }, 1000)
  },
  methods: {
    initApp() {
      this.app = {
        cover: "https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221414007.PNG",
        viewsIndex: 0,
        serviceStage: 0,
        alertView: {
          display: false
        }
      }
    },

    loginBtnTap() {
      this.app.viewsIndex = 2;
    },

    launchServiceBtnTap() {
      this.app.alertView.display = true;
    },

    homeBtnTap() {
      this.initApp();
      this.app.viewsIndex = 2
    },

    scanBtnTap() {
      this.app.viewsIndex = 3
    },

    serviceBtnTap() {
      this.app.viewsIndex = 4
    },

    authorizationBtnTap() {
      this.app.viewsIndex = 5
    },

    authorizationConfirmBtnTap() {
      this.app.viewsIndex = 4
      this.app.serviceStage = 1
    },

    alertCancelBtnTap() {
      this.app.alertView.display = false;
    },

    alertConfirmBtnTap() {
      this.app.alertView.display = false;
      this.serviceBtnTap();
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