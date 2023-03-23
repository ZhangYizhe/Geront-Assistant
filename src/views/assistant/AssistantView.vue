<template>
  <div :class="['assistant-parent-canvas', assistantStore.display ? 'assistant-parent-canvas-default-position': 'assistant-parent-canvas-hidden-position']">
    <div class="assistant-canvas p-4">
      <div class="columns is-mobile is-gapless">
        <div class="column is-narrow">
          <div class="assistant-gif-bg" @click="showContentBtnTap">
            <img class="assistant-gif" src="@/assets/assistant/img/goat.gif" alt="">
          </div>
        </div>
        <div :class="['column ml-3 assistant-messages',  assistantStore.display ? 'assistant-messages-default': 'assistant-messages-hidden']">
          <template v-if="assistantStore.display">
            <template v-for="message in assistantStore.messages">
              <div class="assistant-bubble px-3 py-3 mb-3" v-html="message"></div>
            </template>

            <div class="button is-dark mb-3" @click="backToHome" v-if="!assistantStore.hiddenBackToHome">請幫我關閉這個應用！</div>
            <div class="button is-danger mb-3" @click="hideHelpBtnTap" v-if="assistantStore.showHideHelp">請不要提示我，讓我自己試試！</div>
            <div class="button is-link" @click="hiddenContentBtnTap">
              <template v-if="assistantStore.showHideHelp">
                了解了
              </template>
              <template v-else>
                了解了，讓我試試！
              </template>

            </div>
          </template>
        </div>
      </div>
    </div>

    <div :class="['assistant-bg-canvas', assistantStore.display ? 'assistant-bg-canvas-default': 'assistant-bg-canvas-hidden']"> </div>
  </div>
</template>

<script>
import {useAssistantStore} from "@/stores/assistantStore";
import router from "@/router";
export default {
  name: "AssistantView",
  data() {
    return {
      assistantStore: useAssistantStore()
    }
  },
  methods: {
    showContentBtnTap() {
      this.assistantStore.display = true;
    },

    hiddenContentBtnTap() {
      this.assistantStore.display = false;
    },

    hideHelpBtnTap() {
      this.assistantStore.hideHelp = true;
      this.hiddenContentBtnTap();

      setTimeout(() => {
        router.push({name: "homeDetails"})
      }, 300)
    },

    backToHome() {
      if (confirm('您確定要關閉當前虛擬應用嗎，您的所有操作將不會被存儲！')) {
        router.push({name: "home"})
      }
    }
  }
}
</script>

<style scoped>

.assistant-parent-canvas {
  position: fixed;
  z-index: 1000;
  max-height: 100vh;
  overflow: scroll;

  cursor: pointer;

  /* Keyword values */
  user-select: none;
  /* Mozilla-specific values */
  -moz-user-select: none;
  /* WebKit-specific values */
  -webkit-user-select: none;
  /* Microsoft-specific values */
  -ms-user-select: none;

  transition: top 0.3s, left 0.3s;
  transition-timing-function: ease-in-out;
}

.assistant-parent-canvas-default-position {
  top: 0;
  left: 0;
}

.assistant-parent-canvas-hidden-position {
  top: calc(50vh - 30px);
  left: -50px;
}

.assistant-bg-canvas {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;


  transition: background-color 0.3s;
  transition-delay: 0.3s;
  transition-timing-function: ease-in-out;
}

.assistant-bg-canvas-default {
  background-color: rgba(0, 0, 0, 0.6);
}

.assistant-bg-canvas-hidden {
  pointer-events: none;
}

.assistant-gif {
  width: 44px;
  height: 44px;
  margin-left: 8px;
  margin-top: 8px;
  position: absolute
}

.assistant-gif-bg {
  background-color: var(--main-color);
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 0 3px var(--main-color);
}

.assistant-messages {
  transition-timing-function: ease-in-out;
  transition: opacity 0.3s, transform 0.3s;
  transform-origin: top left;
}

.assistant-messages-default {
  transition-delay: 0.3s;
  opacity: 1;
  transform: scale(1);
}

.assistant-messages-hidden {
  opacity: 0;
  transform: scale(0);
}

.assistant-bubble {
  background-color: var(--main-color);
  border-radius: 10px;
  box-shadow: 0 0 3px var(--main-color);
}
</style>