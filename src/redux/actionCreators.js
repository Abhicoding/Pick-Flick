// @flow
import * as actionType from './actions.js'

import {url, key} from '../../private.js'

export function setSearchTerm (searchTerm: string) {
    return {type: actionType.SET_SEARCH_TERM, payload: searchTerm}
}

export function setNextPage (pageNum: number) {
    return {type: actionType.SET_NEXT_PAGE, payload: pageNum}
}

export function getNextPage (pageNum: number) {
    return (
        {
            type: actionType.GET_NEXT_PAGE, 
            payload: fetch(url.movie_fetch + pageNum)
                .then(res => res.json())
                .then(data => data.results)
        }
    )
}

export function getSearchResults (searchTerm: string) {
    return (
        {
            type: actionType.GET_SEARCH_RESULTS,
            payload: fetch(url.search_query(searchTerm))
                .then(res => res.json())
                .then(data => data.results)
        }
    )
}

export function getMovieDetails (movieId: string) {
    return (
        {
            type: actionType.GET_MOVIE_DETAILS,
            payload: fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key.api_key}&language=en-US`)
            .then(data => data.json())
        }
    )
}