// @flow
import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import MovieCard from '../MovieCard/moviecard.jsx'

import {setNextPage, getNextPage} from '../../redux/actionCreators.js'

class Browse extends React.Component <any, any>{
  constructor(props) {
    super (props)
    const self : any = this
    self.handlePageChange = self.handlePageChange.bind(self)
  }

  handlePageChange () {
    this.props.handleNextPage(this.props.page + 1)
  }

  render () {
    console.log(this.props, 'props log')
  return (
    <div>
    {/* {this.props.results.map((movie) =>
      <MovieCard key={movie.id} {...movie} />
    )} */}
    <button onClick={this.handlePageChange}> More </button>
    </div>
  )}
}

const mapStateToProps = (state: any) => ({results : state.results,
searchTerm: state.searchTerm, page: state.page})

const mapDispatchToProps = (dispatch: Function) => ({
  handleNextPage (page) {
    dispatch(setNextPage(page))
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