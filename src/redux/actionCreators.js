import {SET_SEARCH_TERM, GET_NEXT_PAGE} from './actions.js'

export function setSearchTerm (searchTerm) {
    return {type: SET_SEARCH_TERM, payload: searchTerm}
}

export function getNextPage (pageNum) {
    return {type: GET_NEXT_PAGE, payload: pageNum}
}