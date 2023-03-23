import { defineStore } from 'pinia'

export const useAssistantStore = defineStore('assistant', {
    state: () => ({
        cookies: null,
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
        firstVisit(isTrue) {
            this.cookies.set('isFirstVisit', isTrue);
            this.isFirstVisit = isTrue;
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
