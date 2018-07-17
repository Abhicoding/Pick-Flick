// @flow
import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import styled from 'styled-components'

import { getMovieDetails } from '../../redux/actionCreators.js';

class MovieDetails extends React.Component<Props> {

  componentWillMount () {
    this.props.fetchMovie(this.props.match.params.id)
  }

  render () {
    const Backdrop = styled.div`width: 100%; 
    height: 100%; 
    position: fixed; 
    left: 0px; 
    top: 0px; 
    z-index: -1;
    color: rgba(0,0,0,0.6);
    `

    const {movie} = this.props
    return (
      <div>
        { movie.backdrop_path ?
        <Backdrop>
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} width='100%'
            height='100%' color='rgba(0,0,0,0.6)' />
        </Backdrop>
        : null }
        <Content1>
          {movie.title}
        </Content1>
        <Content2>
          {movie.vote_average}
        </Content2>
        <Content3>
          {movie.overview}
        </Content3>
      </div>
    )
  }
}

const mapStateToProps = (state: any): {movie: Movie} => {
  return {
    movie: state.movieDetails
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  fetchMovie (id: string): void {
    dispatch(getMovieDetails(id))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails))

type Props = {
  fetchMovie: Function,
  match: any,
  movie: Movie
}


const Content1 = styled.div`
    z-index: 1;
    font-weight: 700
    font-size: 3em
    color: white`
const Content2 = styled.div`
    z-index: 1;
    font-weight: 500
    font-size: 2em
    color: white`
const Content3 = styled.div`
    z-index: 1;
    font-weight: 500
    font-size: 1.2em
    color: white`