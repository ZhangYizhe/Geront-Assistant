import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useBasicStore} from "@/stores/basicStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'home',
          meta: {
            class: 'home',
          },
          component: HomeView,
        },
        {
          path: 'home/detail',
          name: 'homeDetails',
          meta: {
            class: 'homeDetails',
          },
          component: () => import('../views/home/HomeDetailsView.vue')
        }
      ]
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
  ],
})

router.beforeEach((to, from) => {
  const basicStroe = useBasicStore();
  if (to.meta.class === 'home') {
    basicStroe.tabBar = 'home'
    basicStroe.setDefaultBars()
  } else if (to.meta.class === 'user') {
    basicStroe.tabBar = 'user'
    basicStroe.dismissBar('navigationBar')
  } else if (to.meta.class === 'homeDetails') {
    basicStroe.tabBar = 'home'
    basicStroe.dismissBar('')
  } else {
    basicStroe.setDefaultBars()
  }

})

export default router
