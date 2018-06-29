import React from 'react'
import styled from 'styled-components'

const MovieCard = (movie) => {
  let trimmed
  if (movie.title.length > 24) {
    trimmed = movie.overview.substring(0, 88) + ' ...'
  } else {
    trimmed = movie.overview.substring(0, 120) + ' ...'
  }
  return (
    <Wrapper>
      <div className='tile is-ancestor'>
        <div className='tile is-parent'>
          <article className='tile is-child box' >
            <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
            <p className='title'>{movie.title}</p>
            <p className='subtitle'>{movie.vote_average}</p>
            <div className='content'>
              <p>{trimmed}</p>
            </div>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
float: left;
width: 30%;
height: 730px;
margin-left: 2.5%;
margin-top: 2%;`

export default MovieCard
