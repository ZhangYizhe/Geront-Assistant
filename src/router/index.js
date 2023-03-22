import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useBasicStore} from "@/stores/basicStore";
import NavigationBar from "@/components/basic/NavigationBar.vue";
import TabBar from "@/components/basic/TabBar.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
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
                    components: {
                        default: HomeView,
                        navigationBar: NavigationBar,
                        tabBar: TabBar,
                    },
                },
                {
                    path: 'home/detail',
                    name: 'homeDetails',
                    meta: {
                        tabBar: 'homeDetails',
                        title: 'Details',
                        showBackBtn: true,
                    },
                    components: {
                        default: () => import('../views/home/HomeDetailsView.vue'),
                        navigationBar: NavigationBar,
                        // tabBar: TabBar,
                    }
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
            components: {
                default: () => import('../views/search/SearchView.vue'),
                navigationBar: NavigationBar,
                tabBar: TabBar,
            }
        }
    ],
})

router.beforeEach((to, from) => {
    const basicStroe = useBasicStore();
    basicStroe.tabBar = to.meta.tabBar;
})

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    if (toDepth === fromDepth) {

    } else {
        to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
})

export default router
