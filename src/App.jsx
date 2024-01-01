import { useEffect, useState } from 'react';
import './App.css'
import MoviesList from './components/MoviesList';
import SearchMovies from './components/SearchMovies';

function App() {
  let [movies, setMovies] = useState(null);

  let getMovies = async () => {
    
    try {
      let response = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=harry potter and");
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
    <section className='app-container'>
      <SearchMovies movies={movies} />
      <MoviesList movies={movies}/>
    </section>
    
  )
}

export default App;