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
        <section>
        This is the movie page.
        </section>
    )
}

export default Movie;

