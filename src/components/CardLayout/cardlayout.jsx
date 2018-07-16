import React from 'react'

import MovieCard from '../MovieCard/moviecard.jsx'

const CardLayout = (arr : Array) => {
    return (
        <div className='is-ancestor'>
            <div className='tile is-parent'>
        {
            arr.movieArray.map(movie => 
                <MovieCard {...movie} key={movie.id}/>)
        }
        </div>
        </ div>
    )
}

export default CardLayout