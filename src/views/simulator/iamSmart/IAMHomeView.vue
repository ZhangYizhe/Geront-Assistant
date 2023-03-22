<template>
<div class="main-canvas">
  <div class="navigationBar">
    <img class="navigationBarMenu" src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221439087.jpeg" alt="">
  </div>
  <section class="section p-0">
    <img :src="bannerImg" alt="" style="width: 100%;">
  </section>
  <section class="section p-0">
    <img src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221446032.jpeg" alt="">
  </section>
  <section class="section py-0 px-4">
    <div class="columns is-multiline is-gapless">
      <div class="column is-narrow mb-3">
        <p style="font-size: 1.3rem; font-weight: bold">網上服務</p>
      </div>
      <div class="column">
        <div class="columns is-mobile is-gapless">
          <div class="column has-text-centered mr-3">
            <div class="networkServiceItem py-3">
              <div class="columns is-gapless">
                <div class="column">
                  <img style="width: 20px" src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221506387.jpeg" alt="">
                </div>
                <div class="column">
                  全部
                </div>
              </div>
            </div>
          </div>
          <div class="column has-text-centered mr-3">
            <div class="networkServiceItem py-3">
              <div class="columns is-gapless">
                <div class="column">
                  <img style="width: 20px" src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221506388.jpeg" alt="">
                </div>
                <div class="column">
                  最近使用
                </div>
              </div>
            </div>
          </div>
          <div class="column has-text-centered">
            <div class="networkServiceItem py-3">
              <div class="columns is-gapless">
                <div class="column">
                  <img style="width: 20px" src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221506389.jpeg" alt="">
                </div>
                <div class="column">
                  已收藏
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column has-text-centered mt-3">
        <div class="networkServiceItem py-2">
          <img style="width: 20px;vertical-align:middle; margin-top: -3px; margin-right: 5px" src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221506390.jpeg" alt="">政府電子表格（香港政府一站通）
        </div>
      </div>
    </div>
  </section>
  <section class="section pb-0 py-4 px-4">
    <div class="columns is-multiline is-gapless">
      <div class="column is-narrow mb-3">
        <p style="font-size: 1.3rem; font-weight: bold">熱門網上服務</p>
      </div>
      <div class="column mt-4" v-for="item in hotServiceList">
        <div class="hotServiceItem p-3" @click="launchServiceBtnTap">
          <div class="columns is-mobile">
            <div class="column">
              <div class="columns">
                <div class="column">
                  <div class="title">
                    {{item.title}}
                  </div>
                </div>
                <div class="column">
                  <div class="source">
                    {{item.source}}
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-narrow">
              <div class="details">
                詳情
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section p-0">
    <p style="width: 100%; text-align: center; font-size: 1.3rem; color: #2A7466; font-weight: 500; text-decoration-line: underline;">更多網上服務</p>
  </section>


  <div style="width: 100%; left: 0; bottom: 0; position: fixed; z-index: 10; background-color: #F8F8F8;">
    <button class="scan-btn" @click="scanBtnTap">
      <img style="width: 30px;vertical-align:middle; margin-top: -5px" src="https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221513367.jpeg" alt="">
      掃描二維碼(QR Code)
    </button>
  </div>

</div>
</template>

<script>
export default {
  name: "IAMHomeView",
  props: ['scanBtnTap', 'launchServiceBtnTap'],
  data() {
    return {
      bannerImg: "https://raw.githubusercontent.com/ZhangYizhe/picgo/master/development/202303221435643.jpeg",

      hotServiceList: [
        {
          title: "2023年消費券計劃 - 查詢登記記錄",
          source: "財政司司長辦公室",
        },
        {
          title: "2019冠狀病毒病電子疫苗接種及檢測紀錄系統（包括歐盟數碼新冠通行證)",
          source: "政府資訊科技總監辦公室",
        },
        {
          title: "「康體通」網上預訂服務",
          source: "康樂及文化事務署",
        }
      ]
    }
  }
}
</script>

<style scoped>
.main-canvas {
  background-color: #F8F8F8;
  min-height: 100vh;
  padding-bottom: 150px;
}

.navigationBar {
  background-color: white;
  height: 50px;
  position: sticky;
  top: 0;
  left: 0;
}

.navigationBarMenu {
  position: absolute;
  height: 40px;
  right: 20px;
  top: 10px;
}

.networkServiceItem {
  font-weight: bold;
  font-size: 1.2rem;
  color: #2A7466;
  border-radius: 3px;
  background-color: white;
  border: 1px solid #D9D9D9;
}

.hotServiceItem {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 8px #cecece;
}

.hotServiceItem .title {
  font-size: 1.3rem;
}

.hotServiceItem .source {
  font-size: 1.2rem;
  color: #969696;
  /*font-weight: bold;*/
}

.hotServiceItem .details {
  font-size: 1rem;
  background-color: #2A7466;
  padding: 2px 10px 2px 10px;
  color: white;
  border-radius: 1rem;
}

.scan-btn {
  border: none;
  height: 60px;
  margin-left: 5%;
  margin-bottom: 50px;
  margin-top: 20px;
  width: 90%;
  border-radius: 30px;
  background-color: #2A7466;
  color: white;
  font-size: 20px;
  box-shadow: 0 0 7px #2A7466;
}

.scan-btn:active {
  background-color: #215b51;
}
</style>