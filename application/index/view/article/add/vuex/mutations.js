import {
    set_cover_image_url, set_articel_title, set_articel_content,
    set_dom_content, push_select_array, remove_sub_type_in_selected,
    set_dom_title
} from './actionTypes'

export default {
    [set_cover_image_url](state, { cover_image_url }) {
        state.articel.cover_image_url = cover_image_url;
    },
    [set_articel_title](state, { title }) {
        state.articel.title = title;
    },
    [set_articel_content](state, { content }) {
        state.articel.content = content;
    },
    [set_dom_content](state, { dom }) {
        state.dom.$content = dom
    },
    [set_dom_title](state, { dom }) {
        state.dom.$title = dom
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