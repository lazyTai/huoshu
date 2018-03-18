import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
const store = new Vuex.Store({
    state: {
        count: 0,
        articel: {
            title: '',
            content: '',
            cover_image_url: '',
        },
        haved_selected: [],
        dom: {
            $content: null
        }
    },
    mutations,
    actions
})
export default store