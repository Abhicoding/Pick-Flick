import React from 'react'
import {Link} from 'react-router-dom'
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
      <Link to={`/${movie.id}`}>
        <div className='tile is-ancestor'>
          <div className='tile is-parent'>
            <article className='tile is-child box' >
              <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
              <p className='title'>{movie.title}</p>
              <p className='subtitle'>{movie.vote_average}</p>
              <div className='content'>
                <Parawrap>
                  <p>{trimmed}</p>
                </Parawrap>
              </div>
            </article>
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
float: left;
width: 30%;
min-width: 388px;
height: 730px;
margin-left: 2.5%;
margin-top: 2%;
`
const Parawrap = styled.div`
overflow: hidden;`

export default MovieCard
