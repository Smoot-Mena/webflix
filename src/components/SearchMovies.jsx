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

      const addFav = (movie) => {
        localStorage.setItem(movie.Title, movie.Poster);
      }
    
      return (
			<section id="searched-movie">
				<form onSubmit={handleSubmit}>
					<input type="text" value={input} onChange={handleChange} />
					<button>🔎 Search</button>
					{searchedMovie && (
						<section>
							<img src={searchedMovie.Poster} alt="" />
							<h2>Title: {searchedMovie.Title}</h2>
                            <button onClick={() => addFav(searchedMovie)}>{"❤︎ Add to Favorites"}</button>
							<h5>Released: {searchedMovie.Released}</h5>
							<p>
								<strong>Actors:</strong> {searchedMovie.Actors}
							</p>
							<p>
								<strong>Rated:</strong> {searchedMovie.Rated}{" "}
								<span>Runtime: {searchedMovie.Runtime}</span>
							</p>
							<p>
								<strong>Genre:</strong> {searchedMovie.Genre}
							</p>
							<p>
								<strong>Director:</strong>{" "}
								{searchedMovie.Director}{" "}
								<span>Writer: {searchedMovie.Writer}</span>
							</p>
							<p>
								<strong>Language:</strong>{" "}
								{searchedMovie.Language}
							</p>
							<p>
								<strong>Plot:</strong>{" "}
								<q>{searchedMovie.Plot}</q>
							</p>
							<p>
								<strong>Awards:</strong> {searchedMovie.Awards}
							</p>
							<p>
								<strong>Box Office:</strong>{" "}
								{searchedMovie.BoxOffice}
							</p>
							<p>
								<strong>Ratings:</strong>
								<ul>
									{searchedMovie &&
										searchedMovie.Ratings.map(
											(rating, index) => (
												<li key={index}>
													{rating.Source}:{" "}
													{rating.Value}
												</li>
											)
										)}
									<li>
										imDB Rating: {searchedMovie.imdbRating}
									</li>
								</ul>
							</p>{" "}
						</section>
					)}
				</form>
			</section>
		);
    }

export default SearchMovies;