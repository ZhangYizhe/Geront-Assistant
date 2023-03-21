<template>
  <section class="data pt-0 pb-4" style="border-top: 1px solid #d2d2d2; color: black">
    <p class="py-2 px-4" style="font-size: 1.3rem; font-weight: bold">
      {{data.title}}
    </p>

    <template v-if="data.items.length > 1">
      <carousel class="carousel" :itemsToShow="1.1" :wrapAround="false" :transition="500">
        <slide v-for="slide in data.items" :key="slide">
          <div class="carousel-item">
            <div class="columns is-multiline is-gapless">
              <div class="carousel-item" v-for="item in slide">
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
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </template>
    <template v-else>
      <div class="carousel-item">
        <div class="columns is-multiline is-gapless">
          <div class="carousel-item" v-for="item in data.items[0]">
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
          </div>
        </div>
      </div>
    </template>


  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: "HomeSublistView",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: ['data']
}
</script>

<style scoped>

.carousel-item {
  width: 100%;
  overflow: hidden;
  text-align: start;
  padding-right: 5px;
  padding-left: 5px;
}

.carousel__slide {
  display: block;
}

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
  background-color: rgba(0, 0, 0, 0.1);
}
</style>