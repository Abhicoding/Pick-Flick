import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const MovieCard = (movie) => {
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
            <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
            <p className='title'>{movie.title||movie.name}</p>
            {
              movie.vote_average 
              ? <p className='subtitle'>{movie.vote_average}</p> 
              : null
            }
            {
              trimmed
              ?  <div className='content'>
                  <Parawrap>
                    <p>{trimmed}</p>
                  </Parawrap>
                </div>
              : null
            }
          </article>
          </Link>
      </div>
  )
}

export default MovieCard

const Parawrap = styled.div`
overflow: hidden;`

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