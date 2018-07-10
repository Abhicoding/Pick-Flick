// @flow
import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {getNextPage} from '../../redux/actionCreators.js'

// import MovieCard from '../MovieCard/moviecard.jsx'

class Browse extends React.Component <any, any>{
  constructor(props) {
    super (props)
  }
  componentDidMount () {
    this.props.handleNextPage()
  }

  render () {
    console.log(this.props)
  return (
    // data.results.map((movie) =>
    //   <MovieCard key={movie.id} {...movie} />
    // )
    <h1>B</h1>
  )}
}

const mapStateToProps = (state: any) => ({results : state.results,
searchTerm: state.searchTerm})

const mapDispatchToProps = (dispatch: Function) => ({
  handleNextPage () {
    dispatch(getNextPage(['newMovie']))
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