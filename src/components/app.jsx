// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './Header/header.jsx'
import SearchTile from './SearchTile/searchtile.jsx'
import Browse from './Browse/browse.jsx'
import MovieDetails from './MovieDetails/moviedetails.jsx'
import AsyncComponent from './asyncroute.jsx'

import store from '../redux/store.js'

const AsyncSearchTile    = AsyncComponent(() => {
  return import('./SearchTile/searchtile.jsx')
})

const AsyncBrowse = AsyncComponent(() => {
  return import('./Browse/browse.jsx')
})

const AsyncMovieDetails = AsyncComponent(() => {
  return import('./MovieDetails/moviedetails.jsx')
})


const App  = (props: any) => {
    return (
      <Provider store={store}>
        <div>
          <Route path='/' render={props => <Header {...props} />} />

          <Route exact path='/' render={props => <AsyncSearchTile {...props}/>} />
          
          <Switch>
            <Route exact path='/browse' render={props => <AsyncBrowse {...props}/>} />

            <Route exact path='/:id' render={props => <AsyncMovieDetails {...props} />} />
          </Switch>
        </div>
      </Provider>
    )
  }

export default App