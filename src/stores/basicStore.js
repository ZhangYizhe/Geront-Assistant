import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useBasicStore = defineStore('basic', {
    state: () => ({
        navigationBar: 'home',
        tabBar: 'home',
        showNavigationBar: true,
        showTabBar: true,
    }),
    getters: {

    },
    actions: {
        setDefaultBars() {
            this.showNavigationBar = true;
            this.showTabBar = true;
        },
        dismissBar(name) {
            if (name === 'navigationBar') {
                this.showNavigationBar = false;
                this.showTabBar = true;
            } else if (name === 'tabBar') {
                this.showNavigationBar = true;
                this.showTabBar = false;
            } else {
                this.showNavigationBar = false;
                this.showTabBar = false;
            }
        }
    }
})
