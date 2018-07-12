// @flow
import React from 'react'
import styled from 'styled-components'

import {key} from '../../../private.js'

const movieObj = {
  "vote_count": 0, 
  "id": 0, 
  "video": false, 
  "vote_average": 0, 
  "title": '', 
  "popularity": 0, 
  "poster_path": '', 
  "original_language": '', 
  "original_title": '', 
  "genre_ids": [], 
  "backdrop_path": '', 
  "adult": false, 
  "overview": '', 
  "release_date": ''
}


export default class MovieDetails extends React.Component<any, State> {
  constructor (props:any) {
    super(props)
    this.state = {
      movie : movieObj
    }
    const self: any = this
    self.getImage = self.getImage.bind(self)
  }

  getImage () {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${key.api_key}&language=en-US`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movie: data
        })
      })
  }
  componentWillReceiveProps () {
    this.getImage()
  }

  componentWillMount () {
    this.getImage()
  }

  componentWillUnmount () {
    this.setState({movie: movieObj})
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

    const {movie} = this.state
    return (
      <div>
        <Backdrop>
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} width='100%'
            height='100%' color='rgba(0,0,0,0.6)' />
        </Backdrop>
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

type State = {
  movie: Movie
}