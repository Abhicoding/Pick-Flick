// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import Header from './Header/header.jsx'

import AsyncRoute from './asyncroute.jsx'

import store from '../redux/store.js'

const App  = (props: any) => {
    return (
      <Provider store={store}>
        <div>
          <Route path='/' render={props => <Header {...props} />} />

          <Route exact path='/' component={props => <AsyncRoute props ={props} loadingPromise={import('./SearchTile/searchtile.jsx')} />} />
          
          <Switch>
            <Route exact path='/browse' render={props => <AsyncRoute props ={props} loadingPromise={import('./Browse/browse.jsx')} />} />

            <Route exact path='/:id' component={props => <AsyncRoute props ={props} loadingPromise={import('./MovieDetails/moviedetails.jsx')} />} />} />
          </Switch>
        </div>
      </Provider>
    )
  }

export default App