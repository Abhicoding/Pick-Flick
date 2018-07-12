// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './Header/header.jsx'
import SearchTile from './SearchTile/searchtile.jsx'
import Browse from './Browse/browse.jsx'
import MovieDetails from './MovieDetails/moviedetails.jsx'

import store from '../redux/store.js'
import data from '../../sampldata.js'

const App  = (props: any) => {
    return (
      <Provider store={store}>
        <div>
          <Route path='/' render={props => <Header {...props} />} />

          <Route exact path='/' render={props => <SearchTile {...props} />} />
          
          <Switch>
            <Route exact path='/browse' render={props => <Browse {...props} />} />

            <Route exact path='/:id' render={props => <MovieDetails {...props} />} />
          </Switch>
        </div>
      </Provider>
    )
  }

export default App

// type State = {
//   searchTerm: string,
//   results: Array<any>
// }

// type Movie = {
//   "vote_count": number, 
//   "id": number, 
//   "video": boolean, 
//   "vote_average": number, 
//   "title": string, 
//   "popularity": number, 
//   "poster_path": string, 
//   "original_language": string, 
//   "original_title": string, 
//   "genre_ids": Array<number>, 
//   "backdrop_path": string, 
//   "adult": boolean, 
//   "overview": string, 
//   "release_date": string
// }