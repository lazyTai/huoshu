import {
    set_cover_image_url, set_articel_title, set_articel_content,
    set_dom_content
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
    }
}