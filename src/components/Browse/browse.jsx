// @flow
import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

// import MovieCard from '../MovieCard/moviecard.jsx'

import {getNextPage} from '../../redux/actionCreators.js'
import {url} from '../../../private.js'

class Browse extends React.Component <any, any>{
  constructor(props) {
    super (props)
    this.state = {
      page: this.props.page
    }
    const self : any = this
    self.handlePageChange = self.handlePageChange.bind(self)
  }

  handlePageChange () {
    this.props.handleNextPage(this.state.page++)
  }

  componentDidMount () {
    if (this.props.searchTerm === '') {
      console.log(url.movie_fetch+this.props.page)
      fetch(url.movie_fetch + this.props.page)
      .then(res => res.json())
      .then(data => console.log(data))
      // .then(moviedata => this.props.handleNextPage(moviedata.results))
    }
  }

  render () {
    console.log(this.props)
  return (
    // data.results.map((movie) =>
    //   <MovieCard key={movie.id} {...movie} />
    // )
    <button onClick={this.handlePageChange} >More</button>
  )}
}

const mapStateToProps = (state: any) => ({results : state.results,
searchTerm: state.searchTerm, page: state.page})

const mapDispatchToProps = (dispatch: Function) => ({
  handleNextPage (page) {
    console.log(page, 'inside handle')
    dispatch(getNextPage(page))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Browse))

type Data = { 
  "results": Array<Movie>
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