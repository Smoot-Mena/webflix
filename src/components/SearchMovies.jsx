import React from 'react'

function SearchMovies( {movies} ) {
    return (
        <nav>
            <input type="text" />
            <button className='search-button'>SEARCH</button>
        </nav>
    )
}

export default SearchMovies;