import * as types from './actionTypes'
import _ from 'underscore'
var actions = {}
_.each(types, (value, key) => {
    actions[key] = ({ commit }, payload) => {
        commit(key, payload)
    }
})
export default actions