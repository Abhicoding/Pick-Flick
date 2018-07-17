//@ flow
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const MovieCard = (movie: Movie) => {
  let trimmed
  if (movie.title) {
    if (movie.title.length > 18) {
      trimmed = movie.overview.substring(0, 70) + ' ...'
    } else {
      trimmed = movie.overview.substring(0, 100) + ' ...'
    }
  }
  return (
    <div className='tile is-parent is-3'>
      <Link to={`/${movie.id}`}>
          <article className='tile is-child box' >
            <figure className='is-4by3'>
              <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
            </figure>
            <h3 className='title'>{movie.title||movie.name}</h3>
            {
              movie.vote_average 
              ? <h3 className='subtitle'>{movie.vote_average}</h3> 
              : null
            }
            <article>
            <Parawrap>
              <p>{movie.overview}</p>
            </Parawrap>
            </article>
          </article>
          </Link>
      </div>
  )
}

export default MovieCard

const Parawrap = styled.div`
// overflow: hidden;
// whitespace: no wrap;`