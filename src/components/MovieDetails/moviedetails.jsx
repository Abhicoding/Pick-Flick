import React from 'react'
import styled from 'styled-components'

import key from '../../../private.js'

export default class MovieDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {}
    }
    this.getImage = this.getImage.bind(this)
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
    this.setState({movie: {}})
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
