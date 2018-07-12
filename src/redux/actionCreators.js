import {SET_SEARCH_TERM, SET_NEXT_PAGE, GET_NEXT_PAGE} from './actions.js'

import {url} from '../../private.js'

export function setSearchTerm (searchTerm) {
    return {type: SET_SEARCH_TERM, payload: searchTerm}
}

export function setNextPage (pageNum) {
    return {type: SET_NEXT_PAGE, payload: pageNum}
}

export function getNextPage (pageNum) {
    const temp = {type: GET_NEXT_PAGE, payload: fetch(url.movie_fetch + pageNum)
        .then(res => res.json())
        .then(data => (data.results))}
    console.log(temp, 'action creator')
    return temp
}