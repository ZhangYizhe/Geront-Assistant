import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useBasicStore} from "@/stores/basicStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { left: 0, top: 0 }
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
                        tabBar: 'home',
                        title: 'Home',
                        showBackBtn: false,
                    },
                    component: HomeView,
                },
                {
                    path: 'home/detail',
                    name: 'homeDetails',
                    meta: {
                        tabBar: 'homeDetails',
                        title: 'Details',
                        showBackBtn: true,
                    },
                    component: () => import('../views/home/HomeDetailsView.vue'),
                }
            ]
        },
        {
            path: '/search',
            name: 'search',
            meta: {
                tabBar: 'search',
                title: 'Search',
                showBackBtn: false,
            },
            component: () => import('../views/search/SearchView.vue'),
        },
        {
            path: '/simulator',
            name: 'simulator',
            component: () => import('../views/simulator/SimulatorView.vue'),
            children: [
                {
                    path: 'iamSmart',
                    name: 'simulator/iamSmart',
                    component: () => import('../views/simulator/iamSmart/IAMSmartView.vue'),
                }
            ]
        }
    ],
})

router.beforeEach((to, from) => {
    const basicStroe = useBasicStore();
    basicStroe.tabBar = to.meta.tabBar;
})

// router.afterEach((to, from) => {
//     const toDepth = to.path.split('/').length
//     const fromDepth = from.path.split('/').length
//     if (toDepth !== fromDepth) {
//         to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//     }
// })

export default router
