import React, { useEffect, useState } from 'react';

function Favorites() {
    let [movies, setMovies] = useState([]);
    let [keys, setKeys] = useState([]);

    const showMovies = () => {
        for (let x = 0; x < localStorage.length; x++) {
            setKeys(prevState => [...prevState, localStorage.key(x)]);
            setMovies(prevState => [...prevState, localStorage.getItem(localStorage.key(x))]);
        }
    }

    useEffect(() => {
        showMovies();
    }, [])

    const removeFav = (movie) => {
        localStorage.removeItem(movie);
        document.getElementById(movie).classList.add("hidden");
    }
    
    return (
        <section id='favorites-container'>{movies && movies.map((movie, index) => (
            <section id={keys[index]} className='favorite' key={index} >
                <h1 className='favorites-title'>{keys[index]}</h1>
                <img className='favorites-image' src={movie} alt={keys[index]}/>
                <button className='remove-favorites-button' onClick={() => removeFav(keys[index])}>{"💔Remove from Favorites"}
                </button>
            </section>
            
        ))}</section>
    )
}

export default Favorites;