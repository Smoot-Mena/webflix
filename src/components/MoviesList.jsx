import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MoviesList( {movies} ) {
    // Media Fetch Variables
    let [series, setSeries] = useState(null);
    let [sports, setSports] = useState(null);
    let [romcoms, setRomcoms] = useState(null);
    let [standups, setStandups] = useState(null);


    let getLists = async () => {
		try {
            // Fetches Mysteries
			let response = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=mystery&type=series");
            // Fetches Sports
            let secondResponse = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=sports");
            // Fetches RomComs
            let thirdResponse = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=romantic");
            // Fetches Standups
            let fourthResponse = await fetch("https://www.omdbapi.com/?apikey=2231b390&s=standup");
            // Converts Mysteries
			let data = await response.json();
            // Converts Sports
            let secondData = await secondResponse.json();
            // Converts RomComs
            let thirdData = await thirdResponse.json();
            // Converts Standups
			let fourthData = await fourthResponse.json();
            // Setting the Mysteries
			setSeries(data.Search);
            // Setting the Sports
            setSports(secondData.Search);
            // Setting the RomComs
            setRomcoms(thirdData.Search);
            // Setting the Standups
            setStandups(fourthData.Search);
		} catch (error) {
			console.error(error);
		}
	}
    
      useEffect(() => {
        getLists();
      }, [])

      // Media Carousel Variables
      const [moviesCurrentIndex, setMoviesCurrentIndex] = useState(0);
      const [moviesLength, setMoviesLength] = useState(0);

      const [seriesCurrentIndex, setSeriesCurrentIndex] = useState(0);
      const [seriesLength, setSeriesLength] = useState(0);

      const [sportsCurrentIndex, setSportsCurrentIndex] = useState(0);
      const [sportsLength, setSportsLength] = useState(0);

      const [romcomsCurrentIndex, setRomcomsCurrentIndex] = useState(0);
      const [romcomsLength, setRomcomsLength] = useState(0);

      const [standupsCurrentIndex, setStandupsCurrentIndex] = useState(0);
      const [standupsLength, setStandupsLength] = useState(0);
      
      // Arrow Functions
      const next = () => {
          if (moviesCurrentIndex < (moviesLength - 1)) {
              setMoviesCurrentIndex(prevState => prevState + 1);
          }
      }
  
      const prev = () => {
          if (moviesCurrentIndex > 0) {
              setMoviesCurrentIndex(prevState => prevState - 1);
          }
      }

      const seriesPrev = () => {
        if (seriesCurrentIndex > 0) {
            setSeriesCurrentIndex(prevState => prevState - 1);
        }
      }

      const seriesNext = () => {
        if (seriesCurrentIndex < (seriesLength - 1)) {
            setSeriesCurrentIndex(prevState => prevState + 1);
        }
      }

      const sportsPrev = () => {
        if (sportsCurrentIndex > 0) {
            setSportsCurrentIndex(prevState => prevState - 1);
        }
      }

      const sportsNext = () => {
        if (sportsCurrentIndex < (sportsLength - 1)) {
            setSportsCurrentIndex(prevState => prevState + 1);
        }
      }

      const romcomsPrev = () => {
        if (romcomsCurrentIndex > 0) {
            setRomcomsCurrentIndex(prevState => prevState - 1);
        }
      }

      const romcomsNext = () => {
        if (romcomsCurrentIndex < (romcomsLength - 1)) {
            setRomcomsCurrentIndex(prevState => prevState + 1);
        }
      }

      const standupsPrev = () => {
        if (standupsCurrentIndex > 0) {
            setStandupsCurrentIndex(prevState => prevState - 1);
        }
      }

      const standupsNext = () => {
        if (standupsCurrentIndex < (standupsLength - 1)) {
            setStandupsCurrentIndex(prevState => prevState + 1);
        }
      }

      useEffect(() => {
        movies ? setMoviesLength(movies.length) : setMoviesLength(10);
        series ? setSeriesLength(series.length) : setSeriesLength(10);
        sports ? setSportsLength(sports.length) : setSportsLength(10);
        romcoms ? setRomcomsLength(romcoms.length) : setRomcomsLength(10);
        standups ? setStandupsLength(standups.length) : setStandupsLength(10);
    }, [movies, series, sports, romcoms, standups])
  

    return (
		<section id="ultimate-container">
			<header>TOP MOVIES</header>
			<section className="carousel-container">
            {moviesCurrentIndex > 0 && <button onClick={prev} className="left arrow">⬅</button>}
				<section className="container carousel-content-container">
					{movies &&
						movies.map((movie, index) => (
							<Link style={{ transform: `translateX(-${moviesCurrentIndex * 110}%)` }} key={index}
								className="movie carousel-content"
								state={{ movie: movie }}
								to={`/${movie.Title}`}>
								<h2 className="movie-title">
									{movie.Title.toUpperCase()}
								</h2>
								<h3 className="movie-year">
									Released: {movie.Year}
								</h3>
								<img
									className="movie-image"
									src={movie.Poster}
									alt={movie.Title}/>
							</Link>))}
				</section>
                {moviesCurrentIndex < moviesLength - 3 && <button onClick={next} className="right arrow">➡</button>}
			</section>
			<header>TOP SERIES</header>
			<section className="carousel-container">
            {seriesCurrentIndex > 0 && <button onClick={seriesPrev} className="series-left arrow">⬅</button>}
				<section className="container carousel-content-container">
					{series &&
						series.map((show, index) => (
							<Link style={{ transform: `translateX(-${seriesCurrentIndex * 110}%)` }} key={index}
								className="show carousel-content"
								state={{ movie: show }}
								to={`/${show.Title}`}>
								<h2 className="show-title">
									{show.Title.toUpperCase()}
								</h2>
								<h3 className="show-year">
									Released: {show.Year}
								</h3>
								<img
									className="show-image"
									src={show.Poster}
									alt={show.Title}/>
							</Link>))}
				</section>
                {seriesCurrentIndex < seriesLength - 3 && <button onClick={seriesNext} className="series-right arrow">➡</button>}
			</section>
			<header>TOP SPORTS</header>
			<section className="carousel-container">
            {sportsCurrentIndex > 0 && <button onClick={sportsPrev} className="sports-left arrow">⬅</button>}
				<section className="container carousel-content-container">
					{sports &&
						sports.map((sport, index) => (
							<Link style={{ transform: `translateX(-${sportsCurrentIndex * 110}%)` }} key={index}
								className="sport carousel-content"
								state={{ movie: sport }}
								to={`/${sport.Title}`}>
								<h2 className="sport-title">
									{sport.Title.toUpperCase()}
								</h2>
								<h3 className="sport-year">
									Released: {sport.Year}
								</h3>
								<img
									className="sport-image"
									src={sport.Poster === "N/A" ? "src/assets/pexels-film.jpg" : sport.Poster}
									alt={sport.Title}/>
							</Link>))}
				</section>
                {sportsCurrentIndex < sportsLength - 3 && <button onClick={sportsNext} className="sports-right arrow">➡</button>}
			</section>
			<header>TOP ROMANTIC COMEDIES</header>
			<section className="carousel-container">
            {romcomsCurrentIndex > 0 && <button onClick={romcomsPrev} className="romcoms-left arrow">⬅</button>}
				<section className="container carousel-content-container">
					{romcoms &&
						romcoms.map((romcom, index) => (
							<Link style={{ transform: `translateX(-${romcomsCurrentIndex * 110}%)` }} key={index}
								className="romcom carousel-content"
								state={{ movie: romcom }}
								to={`/${romcom.Title}`}>
								<h2 className="romcom-title">
									{romcom.Title.toUpperCase()}
								</h2>
								<h3 className="romcom-year">
									Released: {romcom.Year}
								</h3>
								<img
									className="romcom-image"
									src={romcom.Poster === "N/A" ? "src/assets/pexels-film.jpg" : romcom.Poster}
									alt={romcom.Title}/>
							</Link>))}
				</section>
                {romcomsCurrentIndex < romcomsLength - 3 && <button onClick={romcomsNext} className="romcoms-right arrow">➡</button>}
			</section>
			<header>TOP STANDUP COMEDIES</header>
			<section className="carousel-container">
            {standupsCurrentIndex > 0 && <button onClick={standupsPrev} className="standups-left arrow">⬅</button>}
				<section className="container carousel-content-container">
					{standups &&
						standups.map((standup, index) => (
							<Link style={{ transform: `translateX(-${standupsCurrentIndex * 110}%)` }} key={index}
								className="standup carousel-content"
								state={{ movie: standup }}
								to={`/${standup.Title}`}>
								<h2 className="standup-title">
									{standup.Title.toUpperCase()}
								</h2>
								<h3 className="standup-year">
									Released: {standup.Year}
								</h3>
								<img className="standup-image" 
                                        src={standup.Poster === "N/A" ? "src/assets/pexels-film.jpg" : standup.Poster} 
                                        alt={standup.Title}/>
							</Link>))}
				</section>
                {standupsCurrentIndex < standupsLength - 3 && <button onClick={standupsNext} className="standups-right arrow">➡</button>}
			</section>
		</section>
	);
}

export default MoviesList;