import {SET_SEARCH_TERM, SET_NEXT_PAGE, GET_NEXT_PAGE, GET_SEARCH_RESULTS} from './actions.js'

import {url} from '../../private.js'

export function setSearchTerm (searchTerm) {
    return {type: SET_SEARCH_TERM, payload: searchTerm}
}

export function setNextPage (pageNum) {
    return {type: SET_NEXT_PAGE, payload: pageNum}
}

export function getNextPage (pageNum) {
    return (
        {
            type: GET_NEXT_PAGE, 
            payload: fetch(url.movie_fetch + pageNum)
                .then(res => res.json())
                .then(data => data.results)
        }
    )
}

export function getSearchResults (searchTerm) {
    return (
        {
            type: GET_SEARCH_RESULTS,
            payload: fetch(url.search_query(searchTerm))
                .then(res => res.json())
                .then(data => data.results)
        }
    )
}