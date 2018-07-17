// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './Header/header.jsx'
import SearchTile from './SearchTile/searchtile.jsx'
import Browse from './Browse/browse.jsx'
import MovieDetails from './MovieDetails/moviedetails.jsx'

import store from '../redux/store.js'

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