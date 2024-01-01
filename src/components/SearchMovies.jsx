import React from 'react';
import { useState } from 'react';

function SearchMovies( {movies} ) {
    let [input, setInput] = useState("");
    let [searchedMovie, setSearchedMovie] = useState(null);

    const handleChange = (event) => {
        setInput(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.preventDefault(); // don't refresh the page
    
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=2231b390&t=${input}`
          );
          const data = await response.json();
    
          setSearchedMovie(data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
		<>
            <nav>
                <input type="text" value={input} onChange={handleChange} />
				<button className="search-button" onClick={handleSubmit}>🔎 SEARCH</button>
		    </nav>
        </>
	);
}

export default SearchMovies;