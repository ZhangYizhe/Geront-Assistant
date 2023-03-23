import { defineStore } from 'pinia'

export const useBasicStore = defineStore('basic', {
    state: () => ({
        navigationBar: 'home',
        tabBar: 'home',
    }),
    getters: {

    },
    actions: {

    }
})
