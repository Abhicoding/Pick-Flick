import * as perform from "./actions.js";

import {combineReducers} from 'redux'

const setSearchTerm = (state, action) => {
    return action.payload
}

const setNextPage = (state, action) => {
    return action.payload
}

const getNextPage = (state, action) => {
    return [...state, ...action.payload]
}

const getSearchResults = (state, action) => {
    return [...action.payload]
}

const getMovieDetails = (state, action) => {
    return {...action.payload}
}

const searchReducer = (state = '', action) => {
    switch (action.type) {
        case perform.SET_SEARCH_TERM:
        return setSearchTerm(state, action)
        default:
        return state
    }
}

const pageReducer = (state = 1, action) => {
    switch(action.type) {
        case perform.SET_NEXT_PAGE:
        return setNextPage(state, action)
        default:
        return state
    }
}

const resultsReducer = (state=[], action) => {
    switch (action.type) {
        case `${perform.GET_NEXT_PAGE}_FULFILLED`:
        return getNextPage(state, action)
        case `${perform.GET_SEARCH_RESULTS}_FULFILLED`:
        return getSearchResults(state, action)
        default:
        return state
    }
}

const movieDetailsReducer = (state={}, action) => {
    switch(action.type) {
        case `${perform.GET_MOVIE_DETAILS}_FULFILLED`:
        return (getMovieDetails(state, action))
    }
}

const rootReducer = combineReducers({
    searchTerm: searchReducer, 
    page: pageReducer,
    results: resultsReducer,
    movieDetails: movieDetailsReducer
})

export default rootReducer