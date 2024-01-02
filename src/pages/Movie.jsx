import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Movie( {movie} ) {
    const info = useLocation();
    let navigate = useNavigate();
    let [movieInfo, setMovieInfo] = useState(null);

    movie = info.state.movie;
    
    const getMovieInfo = async () => {
        try {
            let response = await fetch(`https://www.omdbapi.com/?apikey=2231b390&t=${movie.Title}`);
            let results = await response.json();
            setMovieInfo(results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovieInfo();
    }, [])

    console.log(movieInfo);
    
    return (
        <section className='movie-card'>{movieInfo && (
            <section>
                <img src={movieInfo.Poster} alt={movieInfo.Title} />
                <h2>Title: {movieInfo.Title}</h2>
                <h5>Released: {movieInfo.Released}</h5>
                <p><strong>Actors:</strong> {movieInfo.Actors}</p>
                <p><strong>Rated:</strong> {movieInfo.Rated} <span>Runtime: {movieInfo.Runtime}</span></p>
                <p><strong>Genre:</strong> {movieInfo.Genre}</p>
                <p><strong>Director:</strong> {movieInfo.Director} <span>Writer: {movieInfo.Writer}</span></p>
                <p><strong>Language:</strong> {movieInfo.Language}</p>
                <p><strong>Plot:</strong> <q>{movieInfo.Plot}</q></p>
                <p><strong>Awards:</strong> {movieInfo.Awards}</p>
                <p><strong>Box Office:</strong> {movieInfo.BoxOffice}</p>
                <p><strong>Ratings:</strong>
                <ul>{movieInfo.Ratings.map((rating, index) => (
                    <li key={index}>{rating.Source}: {rating.Value}</li>
                ))} 
                    <li>imDB Rating: {movieInfo.imdbRating}</li>
                </ul>
                </p>
            </section>
        )}</section>
    )
}

export default Movie;

