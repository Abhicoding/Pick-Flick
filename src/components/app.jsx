import React from 'react'

import Search from './Search/search.jsx'
import TitleCard from './TitleCard/titlecard.jsx'

import data from '../../sampldata.js'

const App = () => {
  return (
    <div>
      <h1 > Pick-Flix</h1>
      <Search />
      <TitleCard {...data} />
    </div>
  )
}

export default App
