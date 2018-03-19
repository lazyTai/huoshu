import {
    set_comments, set_current_page,
    set_page_count, order_comments,
    set_article, set_dom
} from './actionTypes'
import _ from 'underscore'
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
    [order_comments](state, { order, desc }) {
        state.comments = _.sortBy(state.comments, function (item) {
            var item_order = item[order];
            if (order = "update_time") {
                item_order = Date.parse(new Date(item[order]));
            }
            if (desc == "desc") {
                return -item_order
            } else {
                return item_order
            }
        });
    },
    [set_article](state, { article }) {
        state.article = article
    },
    [set_dom](state, { title, content }) {
        state.dom.title = title
        state.dom.content = content
    },
}