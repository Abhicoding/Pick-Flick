import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
float: left;
width: 30%;
hegith: 40%;
margin-left: 2.5%;
margin-top: 2%`

const MovieCard = (movie) => {
  console.log(movie, '@moviecard')
  return (
    <Wrapper>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          <article className='tile is-child box' >
            <figure className='image is-4by3'>
              <img src='https://bulma.io/images/placeholders/640x480.png' />
            </figure>
            <p className='title'>{movie.title}</p>
            <p className='subtitle'>{movie.vote_average}</p>
            <div className='content'>
              <p>{movie.overview}</p>
            </div>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}

export default MovieCard
