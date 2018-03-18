import Vue from 'vue';
import App from './app.vue'

import store from './detail/vuex/store'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
    theme: "primary",
    position: "top-right",
    duration: 1000
})
Vue.use(VueRouter)
const routes = [
    { path: '/', component: App },
]
const router = new VueRouter({ routes })
new Vue({
    el: "#root",
    router,
    store,
})