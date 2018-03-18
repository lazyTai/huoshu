import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
const store = new Vuex.Store({
    state: {
      result: $result,
      page: $page,
      currentPage: 1,
    },
    mutations,
    actions
})
export default store