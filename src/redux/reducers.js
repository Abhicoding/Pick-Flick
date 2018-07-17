// @flow
import {combineReducers} from 'redux'

import * as perform from "./actions.js";

const setSearchTerm = (state: string, action: {payload: string}): string => {
    return action.payload
}

const setNextPage = (state: number, action: {payload: number}): number => {
    return action.payload
}

const getNextPage = (state: Array<Movie>, action: {payload: Array<Movie>}): Array<Movie> => {
    return [...state, ...action.payload]
}

const getSearchResults = (state: Array<Movie>, action: {payload: Array<Movie>}):Array<Movie> => {
    return [...action.payload]
}

const getMovieDetails = (state, action: {payload: Movie}): Movie => {
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

const movieDetailsReducer = (
    state={
        backdrop_path: '', 
        title: '', 
        vote_average: 0, 
        overview: ''
    }, action) => {
    switch(action.type) {
        case `${perform.GET_MOVIE_DETAILS}_FULFILLED`:
        return getMovieDetails(state, action)
        default:
        return state
    }
}

const rootReducer = combineReducers({
    searchTerm: searchReducer, 
    page: pageReducer,
    results: resultsReducer,
    movieDetails: movieDetailsReducer
})

export default rootReducer