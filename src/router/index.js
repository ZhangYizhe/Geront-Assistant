import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useBasicStore} from "@/stores/basicStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        class: 'home',
      },
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        class: 'user',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/user/UserView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const basicStroe = useBasicStore();
  if (to.meta.class === 'home') {
    basicStroe.tabBar = 'home'
    basicStroe.setDefaultBars()
  } else if (to.meta.class === 'user') {
    basicStroe.tabBar = 'user'
    basicStroe.dismissBar('navigationBar')
  } else {
    basicStroe.setDefaultBars()
  }

  var root = document.getElementsByTagName( 'html' )[0];
  if (basicStroe.showNavigationBar === true) {
    root.classList.add('has-navbar-fixed-top')
  } else {
    root.classList.remove('has-navbar-fixed-top')
  }

})

export default router
