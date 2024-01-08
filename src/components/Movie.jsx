import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Movie( {movie} ) {
    const info = useLocation();
    let navigate = useNavigate();
    let [movieInfo, setMovieInfo] = useState(null);
    let [status, setStatus] = useState("");

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

    const manageFavs = () => {
        if (status === "") {
            setStatus("favorite");
            localStorage.setItem(movieInfo.Title, movieInfo.Poster);
        } else if (status === "favorite") {
            setStatus("");
            localStorage.removeItem(movieInfo.imdbID);
        }
    }    
    
    return (
        <section className='movie-card'>{movieInfo && (
            <section>
                <img id='movie-image' src={movieInfo.Poster} alt={movieInfo.Title} />
                <button id='return-button' onClick={() => {navigate("/")}}>↩ Return</button>
                <button id='favorite-button' onClick={() => manageFavs(movieInfo)}>
                    {status === "favorite" ? "💔Remove from Favorites" : "❤︎ Add to Favorites"}
                </button>
                <h2 id='movie-title'><strong>Title:</strong> {movieInfo.Title}</h2>
                <h5 id='movie-released'><i><strong>Released:</strong> {movieInfo.Released}</i></h5>
                <p id='movie-actors'><strong>Actors:</strong> {movieInfo.Actors}</p>
                <p id='movie-rated'><strong>Rated:</strong> {movieInfo.Rated} <span>Runtime: {movieInfo.Runtime}</span></p>
                <p id='movie-genre'><strong>Genre:</strong> {movieInfo.Genre}</p>
                <p id='movie-director'><strong>Director:</strong> {movieInfo.Director}</p>
                <p id='movie-writer'><strong>Writer:</strong> {movieInfo.Writer}</p>
                <p id='movie-language'><strong>Language:</strong> {movieInfo.Language}</p>
                <p id='movie-plot'><strong>Plot:</strong> <q>{movieInfo.Plot}</q></p>
                <p id='movie-awards'><strong>Awards:</strong> {movieInfo.Awards}</p>
                <p id='movie-box-office'><strong>Box Office:</strong> {movieInfo.BoxOffice}</p>
                <p id='movie-ratings-title'><strong>Ratings:</strong></p>
                <ul id='movie-ratings-container'>{movieInfo && movieInfo.Ratings?.map((rating, index) => (
                    <li className='movie-rating' key={index}>{rating.Source}: {rating.Value}</li>
                ))} 
                    <li id='movie-imdb-rating'>imDB Rating: {movieInfo.imdbRating}</li>
                </ul>
            </section>
        )}</section>
    )
}

export default Movie;