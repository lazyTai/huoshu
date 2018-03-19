import Vue from 'vue';
import App from './app.vue'
import Edit from './edit/app.vue'
import Type from './edit/type.vue'
import store from './detail/vuex/store'
import VueRouter from 'vue-router'
import 'vue2-toast/lib/toast.css';
import Toasted from 'vue-toasted';
Vue.use(Toasted)

const routes = [
    { path: '/', component: App },
    { path: '/edit', component: Edit },
    { path: '/type', component: Type },

]
const router = new VueRouter({ routes })
new Vue({
    el: "#root",
    router,
    store,
})