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
    position: fixed; 
    left: 0px; 
    top: 0px; 
    z-index: -1;
    filter: brightness(45%) blur(1px)
    `

    const {movie} = this.props
    return (
      <div>
        { movie.backdrop_path ?
        <Backdrop>
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} width='100%'
            height='100%'/>
        </Backdrop>
        : null }
        <Master>
          <Content1>
            {movie.title}
          </Content1>
          <Content2>  
            Rating {movie.vote_average}
          </Content2>
          <Content3>
            {movie.overview}
          </Content3>
        </Master>
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
    font-weight: 700;
    font-size: 2.5em;
    color: rgb(220, 220, 220);
    margin: 1% 1% 0 1%;`
const Content2 = styled.div`
    z-index: 1;
    font-weight: 500;
    font-size: 1.75em;
    color: rgb(220, 220, 220);
    margin: 1% 1% 0 1%;`
const Content3 = styled.div`
    z-index: 1;
    font-weight: 400;
    font-size: 1.3em;
    color: rgb(220, 220, 220);
    margin: 1% 1% 0 1%;`
const Master = styled.div`
    border: 2px solid;
    border-color: rgb(220, 220, 220);
    margin-left: 5%;
    padding: 1%;
    max-width: 52%`