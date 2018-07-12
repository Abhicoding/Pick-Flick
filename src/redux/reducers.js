import { SET_SEARCH_TERM, SET_NEXT_PAGE, GET_NEXT_PAGE } from "./actions.js";

import {combineReducers} from 'redux'

const setSearchTerm = (state, action) => {
    return Object.assign({}, state, {searchTerm: action.payload})
}

const setNextPage = (state, action) => {
    return Object.assign({}, state, {page: action.payload})
}

const getNextPage = (state, action) => {
    console.log(action.payload, 'payload to getNextpage')
    return Object.assign({}, state, {results: [...action.payload]})
}

const searchReducer = (state = '', action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
        return setSearchTerm(state, action)
        default:
        return state
    }
}

const pageReducer = (state = 1, action) => {
    switch(action.type) {
        case SET_NEXT_PAGE:
        return setNextPage(state, action)
        default:
        return state
    }
}

const resultsReducer = (state=[], action) => {
    switch (action.type) {
        case 'GET_NEXT_PAGE_FULFILLED':
        return getNextPage(state, action)
        default:
        return state
    }
}

const rootReducer = combineReducers({
    search: searchReducer,
    page: pageReducer,
    results: resultsReducer
})

export default rootReducer