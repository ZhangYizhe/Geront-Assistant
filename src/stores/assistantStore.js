import { defineStore } from 'pinia'
import {inject} from "vue";

export const useAssistantStore = defineStore('assistant', {
    state: () => ({
        display: false,
        hiddenBackToHome: true,
        showHideHelp: false,
        messages: [],
        isFirstVisit: false,
        hideHelp: false,
    }),
    getters: {

    },
    actions: {
        firstVisit() {
            const $cookies = inject('$cookies');
            $cookies.set('isFirstVisit', false);
            this.isFirstVisit = false;
        },

        setMessages(messages, display, hiddenBackToHome, showHideHelp) {
            if (messages.length === 0) {
                this.messages = ['請你自由探索這個頁面。']
            } else {
                this.messages = messages
            }

            this.hiddenBackToHome = hiddenBackToHome === true;
            this.showHideHelp = showHideHelp === true;

            if (this.hideHelp === false) {
                this.display = display === true;
            }
        }

    }
})
