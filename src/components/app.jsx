import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Header/header.jsx'
import Search from './Search/search.jsx'
import Browse from './Browse/browse.jsx'

import data from '../../sampldata.js'

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/browse' component={() => <Browse {...data} />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
