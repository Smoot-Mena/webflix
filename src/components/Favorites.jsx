import React, { useEffect, useState } from 'react';

function Favorites() {
    let [movies, setMovies] = useState([]);

    const showMovies = () => {
        for (let x = 0; x < localStorage.length; x++) {
            setMovies(prevState => [...prevState, localStorage.getItem(localStorage.key(x))]);
        }

        
    }

    useEffect(() => {
        showMovies();
    }, [])
    
    return (
        <section id='favorites-container'>{movies && movies.map((movie, index) => (
            <p key={index}>{movie}</p>
        ))}</section>
    )
}

export default Favorites;

