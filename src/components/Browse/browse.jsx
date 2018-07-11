// @flow
import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

// import MovieCard from '../MovieCard/moviecard.jsx'
import Button from '../../shared/Button/button.jsx'

import {getNextPage} from '../../redux/actionCreators.js'
import url from '../../../private.js'

class Browse extends React.Component <any, any>{
  constructor(props) {
    super (props)
  }
  componentDidMount () {
    if (this.props.searchTerm === '') {
      fetch(url + this.props.page)
      .then(data => data.json())
      .then(moviedata => this.props.handleNextPage(moviedata.results))
    }
  }

  render () {
    console.log(this.props)
  return (
    // data.results.map((movie) =>
    //   <MovieCard key={movie.id} {...movie} />
    // )
    <Button onClick={this.props.handleNextPage} >More</Button>
  )}
}

const mapStateToProps = (state: any) => ({results : state.results,
searchTerm: state.searchTerm})

const mapDispatchToProps = (dispatch: Function) => ({
  handleNextPage () {
    dispatch(getNextPage())
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