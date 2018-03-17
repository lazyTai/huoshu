import Vue from 'vue';
import App from './app.vue'

import Vuex from 'vuex';
// Vue.use(Vuex);
import store from './vuex/store'
new Vue({
    el: "#root",
    store,
    template: '<App/>',
    components: {
        App
    }
})