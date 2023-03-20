<template>
  <div class="container">
    <section class="section p-0">
      <HomeCarouselView :data="carouselData" />
    </section>
    <template v-for="section in sections">
      <section class="section pt-0 pb-4 px-4" style="border-top: 1px solid #d2d2d2; color: black">
        <p class="py-2" style="font-size: 1.3rem; font-weight: bold">
          {{section.title}}
        </p>
        <div class="columns is-multiline is-gapless">
          <template v-for="item in section.items">
            <div class="column is-full mb-2">
              <div class="columns is-mobile is-gapless is-vcentered item-card">
                <div class="column is-narrow" style="height: 60px">
                  <img class="item-card-img" :src="item.cover" alt="" style="width: 60px; height: 60px; object-fit: cover; overflow: hidden; border-radius: 10px;">
                </div>
                <div class="column ml-2" style="overflow: hidden;">
                  <div class="item-card-description">{{item.description}}</div>
                  <p>{{item.title}}</p>
                </div>
                <div class="column is-narrow">
                  <router-link :to="{name: 'homeDetails'}">
                    <div class="detail-btn">詳情</div>
                  </router-link>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import {useBasicStore} from "@/stores/basicStore";
import HomeCarouselView from "@/components/home/HomeCarouselView.vue";
export default {
  name: "HomeView",
  components: {HomeCarouselView},
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
          title: "政府應用",
          items: [
            {
              title: "Facebook",
              description: "如何註冊全新臉書賬戶",
              cover: "https://picsum.photos/id/942/60/60",
            },
            {
              title: "Whatsapp",
              description: "如何註冊全新臉書賬戶",
              cover: "https://picsum.photos/id/941/60/60",
            }
          ]
        },
        {
          title: "常用軟件",
          items: [
            {
              title: "Facebook",
              description: "如何註冊全新臉書賬戶",
              cover: "https://picsum.photos/id/947/60/60",
            },
            {
              title: "Whatsapp",
              description: "如何註冊全新臉書賬戶",
              cover: "https://picsum.photos/id/946/60/60",
            }
          ]
        },
        {
          title: "最佳實踐",
          items: [
            {
              title: "Facebook",
              description: "如何註冊全新臉書賬戶",
              cover: "https://picsum.photos/id/945/60/60",
            },
            {
              title: "Whatsapp",
              description: "如何註冊全新臉書賬戶",
              cover: "https://picsum.photos/id/944/60/60",
            }
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
.item-card-description {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.detail-btn {
  padding: 5px 15px 5px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 10px;
  background-color: white;
}
</style>