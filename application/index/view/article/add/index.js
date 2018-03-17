import Vue from 'vue';

import Vuex from 'vuex';

// Vue.use(Vuex);
import store from './vuex/store'
import VueRouter from 'vue-router'
import App from './app.vue'
import Type from './type'
Vue.use(VueRouter)


const routes = [
    { path: '/', component: App },
    { path: '/type', component: Type },
]
const router = new VueRouter({
    routes
})
new Vue({
    el: "#root",
    router,
    store,
})