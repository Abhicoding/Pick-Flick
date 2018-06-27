import React from 'react'

const Browse = (data) => {
  console.log(data, '@data')
  return (data.results.map((movie) => {
    return (<div key={movie.id}>
      <h2>{movie.title}</h2>
      <h3>{movie.vote_average}</h3>
      <p>{movie.overview}</p>
    </div>)
  })
  )
}

export default Browse
