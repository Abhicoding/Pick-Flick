import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header/header.jsx'
import SearchTile from './SearchTile/searchtile.jsx'
import Browse from './Browse/browse.jsx'

import data from '../../sampldata.js'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={SearchTile} />
        <Route exact path='/browse' component={() => <Browse {...data} />} />
      </div>
    </BrowserRouter>
  )
}

export default App
