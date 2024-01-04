import { useEffect, useState } from 'react';
import './App.css'
import MoviesList from './components/MoviesList';
import Movie from './components/Movie';
import Favorites from './components/Favorites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchMovies from './components/SearchMovies';

function App() {
  let [movies, setMovies] = useState(null);

  let getMovies = async () => {
    
    try {
      let response = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=harry potter");
      let data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <section>
      <Navbar />
      <section className="app-container">
			<Routes>
				<Route path="/" element={<MoviesList movies={movies} />} />
        <Route path="/:movie/" element={<Movie movies={movies} />} />
        <Route path='/search/' element={<SearchMovies />} />
        <Route path='/my-favorites/' element={<Favorites />}/>
			</Routes>
		  </section>
    </section>
		
  );
}

export default App;