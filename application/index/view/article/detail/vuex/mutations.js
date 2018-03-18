import {
    set_comments, set_current_page,
    set_page_count
} from './actionTypes'

export default {
    [set_comments](state, { comments }) {
        comments.forEach(small_item => {
            var isHave = false;
            state.comments.forEach(element1 => {
                if (element1.id == small_item.id) {
                    isHave = true
                }
            });
            if (!isHave) {
                state.comments.push(small_item)
            }
        });

    },
    [set_current_page](state, { currentPage }) {
        state.currentPage = currentPage;
    },
    [set_page_count](state, { pageCount }) {
        state.pageCount = pageCount;
    },
}