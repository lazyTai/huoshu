import _ from 'underscore'


export const types;
types[set_article] = 'set_article';

export const mutations = {
    [set_article](state, { aricle }) {
        state.aricle = aricle
    }
}


var actions = {}
_.each(types, (value, key) => {
    actions[key] = ({ commit }, payload) => {
        commit(key, payload)
    }
})
export const store = {
    state: {
        aricle: {}
    },
    mutations,
    actions
}