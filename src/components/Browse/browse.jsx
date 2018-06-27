import React from 'react'
import MovieCard from '../MovieCard/moviecard.jsx'

const Browse = (data) => {
  return (
    data.results.map((movie) =>
      <MovieCard key={movie.id} {...movie} />
    ))
}

export default Browse
