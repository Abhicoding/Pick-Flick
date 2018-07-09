// @flow
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header/header.jsx'
import SearchTile from './SearchTile/searchtile.jsx'
import Browse from './Browse/browse.jsx'
import MovieDetails from './MovieDetails/moviedetails.jsx'

import data from '../../sampldata.js'

class App extends React.Component<any,State> {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      results: data.results
    }
    const self : any = this
    self.searchFunc = self.searchFunc.bind(self)
    self.searchResult = self.searchResult.bind(self)
  }

  searchFunc (input: string) {
    console.log(this.state.searchTerm, 'searchFUnc', input, 'input')
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
          searchTerm={searchTerm} 
          searchResult={this.searchResult} />} />
        }
        <Route exact path='/' render={props => <SearchTile {...props} searchFunc={this.searchFunc}
          searchTerm={searchTerm} 
          searchResult={this.searchResult} />} />
        <Switch>
          <Route exact path='/browse' render={props => <Browse {...props} results={results} />} />

          <Route exact path='/:id' render={props => <MovieDetails {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default App

type State = {
  searchTerm: string,
  results: Array<any>
}

type Movie = {
  "vote_count": number, 
  "id": number, 
  "video": boolean, 
  "vote_average": number, 
  "title": string, 
  "popularity": number, 
  "poster_path": string, 
  "original_language": string, 
  "original_title": string, 
  "genre_ids": Array<number>, 
  "backdrop_path": string, 
  "adult": boolean, 
  "overview": string, 
  "release_date": string
}