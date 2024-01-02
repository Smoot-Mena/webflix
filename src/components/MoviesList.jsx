import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MoviesList( {movies} ) {
    let [series, setSeries] = useState(null);
    let [sports, setSports] = useState(null);


    let getLists = async () => {
		try {
            // Fetches Mysteries
			let response = await fetch(
				"https://www.omdbapi.com/?apikey=2231b390&s=mystery&type=series"
			);
            // Fetches Sports
            let secondResponse = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=football");
            // Converts Mysteries
			let data = await response.json();
            // Converts Sports
            let secondData = await secondResponse.json();
            // Setting the Mysteries
			setSeries(data.Search);
            // Setting the Sports
            setSports(secondData.Search);
		} catch (error) {
			console.error(error);
		}
	}
    
      useEffect(() => {
        getLists();
      }, [])

    return (
        <section id='ultimate-container'>
            <header>TOP MOVIES</header>
            <section className='container'>  
            {movies &&
            movies.map((movie, index) => (
              <Link key={index} className='movie' state={{movie: movie}} to={`/${movie.Title}`}>
                <h2 className='movie-title'>{movie.Title.toUpperCase()}</h2>
                <h3 className='movie-year'>Released: {movie.Year}</h3>
                <img className='movie-image' src={movie.Poster} alt={movie.Title} />
              </Link>))}
            </section>
            <header>TOP SERIES</header>
            <section className='container'>
                {series && series.map((show, index) => (
                    <Link key={index} className='show' state={{movie: show}} to={`/${show.Title}`}>
                        <h2 className='show-title'>{show.Title.toUpperCase()}</h2>
                        <h3 className='show-year'>Released: {show.Year}</h3>
                        <img className='show-image' src={show.Poster} alt={show.Title} />
                    </Link>
                ))}
            </section>
            <header>TOP SPORTS</header>
            <section className='container'>
                {sports && sports.map((sport, index) => (
                    <Link key={index} className='sport' state={{movie: sport}} to={`/${sport.Title}`}>
                        <h2 className='sport-title'>{sport.Title.toUpperCase()}</h2>
                        <h3 className='sport-year'>Released: {sport.Year}</h3>
                        <img className='sport-image' src={sport.Poster === "N/A" ? "./assets/pexels-film.jpg": sport.Poster} alt={sport.Title} />
                    </Link>
                ))}
            </section>
        </section>
    )
}

export default MoviesList;