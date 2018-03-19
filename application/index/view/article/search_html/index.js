import Vue from 'vue';

import VueRouter from 'vue-router'
import App from './app'
import store from './store'
import 'vue2-toast/lib/toast.css';
import Toasted from 'vue-toasted';
Vue.use(Toasted)

const routes = [
    { path: '/', component: App },

]
const router = new VueRouter({ routes })
new Vue({
    el: "#root",
    router,
    store,
})