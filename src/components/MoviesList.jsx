import React from 'react'

function MoviesList( {movies} ) {
    return (
        <section id='movies-container'>
            <header>TOP MOVIES</header>
            {movies &&
            movies.map((movie, index) => (
              <section key={index} className='movie'>
                <h2 className='movie-title'>{movie.Title.toUpperCase()}</h2>
                <h3 className='movie-year'>Released: {movie.Year}</h3>
                <img className='movie-image' src={movie.Poster} alt={movie.Title} />
              </section>
            ))}</section>
    )
}

export default MoviesList;