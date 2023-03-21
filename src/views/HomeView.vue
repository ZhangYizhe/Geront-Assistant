<template>
  <div class="container">
    <section class="section p-0">
      <HomeCarouselView :data="carouselData"/>
    </section>
    <template v-for="section in sections">
      <HomeSublistView :data="section"/>
    </template>
  </div>
</template>

<script>
import {useBasicStore} from "@/stores/basicStore";
import HomeCarouselView from "@/components/home/HomeCarouselView.vue";
import HomeSublistView from "@/components/home/HomeSublistView.vue";

export default {
  name: "HomeView",
  components: {HomeSublistView, HomeCarouselView},
  data() {
    return {
      basicStore: useBasicStore(),
      carouselData: [
        {
          id: 0,
          title: '八達通乘車優惠計劃',
          description: '456',
          link: '',
          cover: 'https://picsum.photos/id/100/500/500',
        },
        {
          id: 1,
          title: '如何註冊「智方便」',
          description: '456',
          link: '',
          cover: 'https://picsum.photos/id/948/500/500',
        },
        {
          id: 2,
          title: '「e通道」帶您快捷通關',
          description: '456',
          link: '',
          cover: 'https://picsum.photos/id/237/500/500',
        },
        {
          id: 3,
          title: '如何使用Facebook發布帖子',
          description: '456',
          link: '',
          cover: 'https://picsum.photos/id/48/500/500',
        }
      ],
      sections: [
        {
          title: "香港政府一站通",
          items: [
            [
              {
                title: "消閒一站通",
                description: "隨時搜尋各項活動詳情",
                cover: "https://www.gov.hk/en/images/mobilesites/GovHK_EventHK.png",
              },
              {
                title: "政府App站通",
                description: "便地找到香港特區政府所推出的流動應用程式",
                cover: "https://www.gov.hk/en/images/mobilesites/GovHK_Apps.png",
              }
            ],
            [
              {
                title: "香港政府通知你",
                description: "以流動裝置接收政府資訊和提示",
                cover: "https://www.gov.hk/en/images/mobilesites/GovHK_Notifications.png",
              },
              {
                title: "安心出行",
                description: "自行記錄進出的不同場所及時間",
                cover: "https://www.gov.hk/en/images/mobilesites/leavehomesafe_appicon_60x60.png",
              }
            ]
          ]
        },
        {
          title: "智方便 iAM Smart",
          items: [
            [
              {
                title: "智方便 iAM Smart",
                description: "登入和使用不同政府部門及商業機構的網上服務",
                cover: "https://www.gov.hk/en/images/mobilesites/iamsmart_appicon.png",
              }
            ]
          ]
        },
        {
          title: "醫務衞生/食物環境衞生",
          items: [
            [
              {
                title: "醫健通eHealth",
                description: "一站式的健康資訊綜合平台，讓您獲取有用的健康資料以及取覽電子健康紀錄",
                cover: "https://www.gov.hk/en/images/mobilesites/eHealth_appIcon.png",
              },
              {
                title: "營計寶",
                description: "透過使用營養標籤，揀選合適的食物",
                cover: "https://www.gov.hk/en/images/mobilesites/FEHD_NuCal.png",
              }
            ],
            [
              {
                title: "「無盡思念」",
                description: "Enables public to pay tribute to loved ones anytime and anywhere.",
                cover: "https://www.gov.hk/en/images/mobilesites/fehd_imsapp_icon_60.png",
              }
            ],
          ]
        },
      ]
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>