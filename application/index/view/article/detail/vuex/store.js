import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
const store = new Vuex.Store({
    state: {
        currentPage: 1,
        pageCount: 0,
        comments: []
    },
    mutations,
    actions
})
export default store