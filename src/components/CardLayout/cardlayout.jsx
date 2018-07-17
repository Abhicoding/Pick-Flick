// @flow
import React from 'react'

import MovieCard from '../MovieCard/moviecard.jsx'

const CardLayout = (arr: {movieArray: Array<Movie>}) => {
    return (
        <div className='tile is-ancestor'>
        {arr ?
            arr.movieArray.map(movie => 
                <MovieCard {...movie} key={movie.id}/>)
        : null}
        </ div>
    )
}

export default CardLayout