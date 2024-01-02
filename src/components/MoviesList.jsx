import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MoviesList( {movies} ) {
    let [series, setSeries] = useState(null);

    let getSeries = async () => {
    
        try {
          let response = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=mystery&type=series");
          let data = await response.json();
          setSeries(data.Search);
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        getSeries();
      }, [])

    return (
        <section id='ultimate-container'>
            <section className='container'>
            <header>TOP MOVIES</header>
            {movies &&
            movies.map((movie, index) => (
              <Link key={index} className='movie' state={{movie: movie}} to={`/${movie.Title}`}>
                <h2 className='movie-title'>{movie.Title.toUpperCase()}</h2>
                <h3 className='movie-year'>Released: {movie.Year}</h3>
                <img className='movie-image' src={movie.Poster} alt={movie.Title} />
              </Link>))}
            </section>
            <section className='container'>
                <header>TOP SERIES</header>
                {series && series.map((show, index) => (
                    <Link key={index} className='show' state={{movie: show}} to={`/${show.Title}`}>
                        <h2 className='show-title'>{show.Title.toUpperCase()}</h2>
                        <h3 className='show-year'>Released: {show.Year}</h3>
                        <img className='show-image' src={show.Poster} alt={show.Title} />
                    </Link>
                ))}
            </section>
        </section>
    )
}

export default MoviesList;