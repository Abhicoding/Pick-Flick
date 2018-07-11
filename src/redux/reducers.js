import { SET_SEARCH_TERM, GET_NEXT_PAGE } from "./actions.js";

import {url} from '../../private.js'

const DEFAULT_STATE = {
    searchTerm: '',
    page: 1,
    results: []
}

const setSearchTerm = (state, action) => {
    return Object.assign({}, state, {searchTerm: action.payload})
}

const getNextPage = (state, action) => {
    let temp = Object.assign({}, state, {page: state.page++})
    fetch(url.movie_fetch + state.page)
    .then(res => res.json)
    .then(data => Object.assign({}, temp, {results : temp.results.concat[data.results]}))
    return temp
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
        return setSearchTerm(state, action)
        case GET_NEXT_PAGE:
        return getNextPage(state, action)
        default:
        return state
    }
}

export default rootReducer