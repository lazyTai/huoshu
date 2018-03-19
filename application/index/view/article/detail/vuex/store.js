import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
const store = new Vuex.Store({
    state: {
        currentPage: 1,
        pageCount: 0,
        comments: [],
        article: {},
        haved_selected:[],
        dom: {
            title: null,
            content: null
        }
    },
    mutations,
    actions
})
export default store