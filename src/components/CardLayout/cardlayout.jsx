import React from 'react'

import MovieCard from '../MovieCard/moviecard.jsx'

const CardLayout = (arr : Array<Movie>) => {
    return (
        <div className='tile is-ancestor'>
        {
            arr.movieArray.map(movie => 
                <MovieCard {...movie} key={movie.id}/>)
        }
        </ div>
    )
}

export default CardLayout