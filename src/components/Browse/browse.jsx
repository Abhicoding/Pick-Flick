// @flow
import * as React from 'react'

import MovieCard from '../MovieCard/moviecard.jsx'

const Browse = (data: Data) => {
  return (
    data.results.map((movie) =>
      <MovieCard key={movie.id} {...movie} />
    ))
}

export default Browse

type Data = {
  "page": number,
  "total_results": number, 
  "total_pages": number, 
  "results": Array<Movie>,
}

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