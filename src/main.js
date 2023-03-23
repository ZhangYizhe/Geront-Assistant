import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.min.css'
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(VueCookies, { expires: '30d'})


app.use(pinia)
app.use(router)

app.mount('#app')
