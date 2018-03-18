import {
    set_result_list_current_page,
    set_current_page
} from './actionTypes'

export default {
    [set_result_list_current_page](state, { currentPage,result }) {
        state.currentPage = currentPage;
        state.result = result;
    },
    [set_current_page](state,{currentPage}){
        state.currentPage = currentPage;
    }
}