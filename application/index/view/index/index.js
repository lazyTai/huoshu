import Vue from 'vue';
import App from './app.vue'
import 'vue2-toast/lib/toast.css';
import store from './vuex/store'

import Toasted from 'vue-toasted';
Vue.use(Toasted)

new Vue({
    el: "#root",
    store,
    template: '<App/>',
    components: {
        App
    }
})