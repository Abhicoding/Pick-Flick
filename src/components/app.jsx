import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header/header.jsx'
import SearchTile from './SearchTile/searchtile.jsx'
import Browse from './Browse/browse.jsx'
import MovieDetails from './MovieDetails/moviedetails.jsx'

import data from '../../sampldata.js'

class App extends React.Component {
  constructor (props) {
    super(props)
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
        (`${movie.title} ${movie.overview}`).toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) > -1
      )
      this.setState({
        results: newResults
      })
    }
  }

  render () {
    const {searchTerm, results} = this.state
    return (
      <div>
        <Route path='/' render={props => <Header {...props} searchFunc={this.searchFunc}
          searchTerm={searchTerm} searchResult={this.searchResult} />} /> {// () => <Header searchFunc={this.searchFunc} searchTerm={searchTerm}
        }
        <Route exact path='/' render={props => <SearchTile {...props} searchFunc={this.searchFunc}
          searchTerm={searchTerm} searchResult={this.searchResult} />} />
        <Switch>
          <Route exact path='/browse' render={props => <Browse {...props} results={results} />} />

          <Route exact path='/:id' render={props => <MovieDetails {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default App
