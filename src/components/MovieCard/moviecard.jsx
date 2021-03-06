// @flow
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const MovieCard = (movie: Movie) => {
  let trimmed
  if (movie.title) {
    if (movie.title.length > 18) {
      trimmed = movie.overview ? movie.overview.substring(0, 70) + ' ...': null
    } else {
      trimmed = movie.overview ? movie.overview.substring(0, 100) + ' ...': null
    }
  }
  return (
    <div className='tile is-parent is-3'>
      <Link to={`/${movie.id}`}>
          <article className='tile is-child box' >
            {movie.poster_path ?
            <figure className='is-4by3'>
              <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
            </figure>
            :null}
            <h4 className='title'>{movie.title||movie.name}</h4>
            {
              movie.vote_average 
              ? <h4 className='subtitle'>{movie.vote_average}</h4> 
              : null
            }
            <article>
            <Parawrap>
              <p>{trimmed}</p>
            </Parawrap>
            </article>
          </article>
          </Link>
      </div>
  )
}

export default MovieCard

const Parawrap = styled.div`
overflow: hidden;
whitespace: no wrap;`