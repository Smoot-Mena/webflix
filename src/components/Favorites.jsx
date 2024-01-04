import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

    console.log(keys[0]);
    
    return (
        <section id='favorites-container'>{movies && movies.map((movie, index) => (
            // <Link key={keys[index]}>
            <Link key={index} state={{movie: keys[index]}} to={`/${keys[index]}`}>
                <h1>{keys[index]}</h1>
                <img src={movie} alt={keys[index]}/>
            </Link>
            
        ))}</section>
    )
}

export default Favorites;