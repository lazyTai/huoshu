import {
    set_comments, set_current_page,
    set_page_count, order_comments,
    set_article, set_dom, push_select_array,
    remove_sub_type_in_selected, change_articel_cover
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
        state.haved_selected = state.article.sub_types
    },
    [set_dom](state, { title, content }) {
        state.dom.title = title
        state.dom.content = content
    },
    [remove_sub_type_in_selected](state, { sub_type }) {
        var index = null;
        state.haved_selected.forEach((element, key) => {
            if (sub_type.sub_type_id == element.sub_type_id) {
                index = key
            }
        });
        if (index != null) {
            state.haved_selected.splice(index, 1)
        }

    },
    [change_articel_cover](state, { cover }) {
        state.article.image_src = cover;
    },
    [push_select_array](state, { sub_type }) {
        var isHave = false;
        state.haved_selected.forEach(element => {
            if (element.sub_type_id == sub_type.sub_type_id) { isHave = true }
        });

        if (!isHave) {
            if (state.haved_selected.length < 3) {
                state.haved_selected.push(sub_type)
            }
        }
    }
}