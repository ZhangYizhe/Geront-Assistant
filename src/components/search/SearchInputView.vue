<template>
  <section class="section py-5 px-4">
    <div class="canvas">
      <div class="columns is-mobile is-gapless is-vcentered">
        <div class="column is-narrow mx-1">
          <ion-row>
            <ion-icon name="search-outline" style="color: gray"></ion-icon>
          </ion-row>
        </div>
        <div class="column">
          <input type="text" placeholder="Applications, Courses">
        </div>
      </div>
    </div>
  </section>
  <section class="section pt-0">
    <div class="mb-4" style="font-size: 1.3rem; font-weight: bold">Discover</div>
    <div class="columns is-multiline is-mobile">
      <div class="column is-6 py-2 px-4" v-for="item in discovers" style="font-size: 18px;">
        <a>
          <ion-row style="justify-content: start; color: var(--main-color);">
            <ion-icon class="pr-2" name="search-outline" style="color: var(--main-color)"></ion-icon>
            {{ item }}
          </ion-row>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchInputView",
  data() {
    return {
      discovers: [
        "繳稅易",
        "智方便",
        "醫健通",
        "政府通知",
        "香港海關",
      ]
    }
  }
}
</script>

<style scoped>
.canvas {
  background-color: var(--main-gray-color);
  border-radius: 10px;
  padding: 10px;
}

.canvas input {
  border: none;
  width: 100%;
  height: 100%;
  background: none;
  font-size: 16px;
  outline: none;
}
</style>