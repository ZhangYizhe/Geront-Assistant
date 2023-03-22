<template>
  <div>
    <NavigationBar/>
    <div class="homeDetailsCanvas">
      <section class="section p-0">
        <div class="columns is-multiline is-gapless">
          <div class="column">
            <img class="cover" :src="details.cover" alt="">
          </div>
          <div class="column">
            <p class="title is-5 py-3 px-5">{{ details.title }}</p>
          </div>
        </div>
      </section>
      <section class="section py-2 px-5">
        <div class="columns is-multiline is-gapless">
          <div class="column description">
            <p v-html="details.description"></p>
          </div>
        </div>
      </section>

      <div class="footerEmptyView">

      </div>

      <router-link :to="{name: details.path}">
        <button class="startBtn">
          立即開始學習
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>

import NavigationBar from "@/components/basic/NavigationBar.vue";

export default {
  name: "HomeDetailsView",
  components: {NavigationBar},
  data() {
    return {
      details: {
        title: "「智方便」2023年消費券計劃 - 查詢登記紀錄",
        cover: "https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221135060.jpg",
        description: "<small>2023-24年度《財政預算案》提出推行2023年消費券計劃，向合資格市民分期發放總額5,000元或2,500元的消費券。我們先在4月16日利用2022年消費券計劃的登記資料，向合資格市民發放第一期3,000元或1,500元消費券，餘額會在7月16日開始向符合2023年消費券計劃資格準則（有關資格準則會於稍後公布）的合資格市民發放。</small>\n\n為了讓您能夠隨時查詢自己的登記狀況，「智方便」現已推出對應查詢功能，以便能隨時核對登記狀況。",
        path: "simulator/iamSmart",
      }
    }
  }
}
</script>

<style scoped>
.homeDetailsCanvas {
  margin-bottom: -90px;
}

.cover {
  overflow: hidden;
  width: 100%;
}

.description {
  white-space: pre-line;
  font-size: 18px;
}

.footerEmptyView {
  height: 60px;
}

.startBtn {
  color: black;
  font-size: 20px;
  font-weight: bold;
  width: 90%;
  height: 60px;
  border-radius: 60px;
  background-color: var(--main-color);
  border: none;
  box-shadow: 0 0 6px var(--main-color);

  position: sticky;
  bottom: 30px;
  left: 5%;
}

.startBtn:active {
  background-color: var(--main-color-dark);
  box-shadow: 0 0 10px var(--main-color-dark);
}

</style>