// @flow
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const MovieCard = (movie : Movie) => {
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

export default MovieCard

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