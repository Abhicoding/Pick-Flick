import { SET_SEARCH_TERM, GET_NEXT_PAGE } from "./actions.js";

const DEFAULT_STATE = {
    searchTerm: '',
    page: 1,
    results: []
}

const setSearchTerm = (state, action) => {
    return Object.assign({}, state, {searchTerm: action.payload})
}

const getNextPage = (state, action) => {
    return Object.assign({}, state, {results: state.results.concat(action.payload)})
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