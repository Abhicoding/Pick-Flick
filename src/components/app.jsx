import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header/header.jsx'
import SearchTile from './SearchTile/searchtile.jsx'
import Browse from './Browse/browse.jsx'

import data from '../../sampldata.js'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      searchTerm: '',
      results: data.results
    }
    this.searchFunc = this.searchFunc.bind(this)
    this.searchResult = this.searchResult.bind(this)
  }

  searchFunc (input) {
    console.log(input, '@searchFunc')
    this.setState({
      searchTerm: input
    })
  }

  searchResult () {
    if (this.state.searchTerm) {
      let newResults = data.results.filter(movie =>
        movie.title.indexOf(this.state.searchTerm) > -1 || movie.overview.indexOf(this.state.searchTerm))
      this.setState({
        results: newResults
      })
    }
  }

  render () {
    const {searchTerm, results} = this.state
    return (
      <BrowserRouter>
        <div>
          <Route path='/' render={props => <Header {...props} searchFunc={this.searchFunc}
            searchTerm={searchTerm} searchResult={this.searchResult} />} /> {// () => <Header searchFunc={this.searchFunc} searchTerm={searchTerm}
          }
          <Route exact path='/' render={props => <SearchTile {...props} searchFunc={this.searchFunc} searchTerm={searchTerm} searchResult={this.searchResult} />} />
          <Route exact path='/browse' render={props => <Browse {...props} results={results} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
