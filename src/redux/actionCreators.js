import {SET_SEARCH_TERM} from './actions.js'

export function setSearchTerm (searchTerm) {
    return {type: SET_SEARCH_TERM, payload: searchTerm}
}