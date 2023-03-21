<template>
  <carousel class="carousel" :itemsToShow="1.1" :wrapAround="true" :transition="500" :autoplay="5000">
    <slide v-for="slide in data" :key="slide">
      <div class="carousel-item">
        <img :src="slide.cover" alt="cover">
        <div class="carousel-content">
          <div class="columns is-mobile is-vcentered">
            <div class="column" style="overflow: hidden;">
              <p style="text-align: left; max-lines: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{slide.title}}</p>
            </div>
            <div class="column is-narrow">
              <div class="carousel-btn" @touchstart="detailsBtnTap">詳情</div>
            </div>
          </div>
        </div>
      </div>
    </slide>
<!--    <template #addons>-->
<!--      <navigation />-->
<!--      <pagination />-->
<!--    </template>-->
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: "HomeCarouselView",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: ['data'],
  methods: {
    detailsBtnTap() {
      this.$router.push({name: 'homeDetails'})
    }
  }
}
</script>

<style scoped>

.carousel {
  margin-top: 20px;
  margin-bottom: 20px;
}

.carousel-item {
  width: 100%;
  height: 200px;
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.carousel-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.44);
  padding: 10px;
  color: white;
}

.carousel-btn {
  padding: 5px 10px 5px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.62);
}

</style>