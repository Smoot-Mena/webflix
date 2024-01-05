import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

function MoviesList( {movies} ) {
    // Media Variables
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

    return (
		<section id="ultimate-container">
			<header>TOP MOVIES</header>
			<Carousel className="carousel-container">
				<section className="container carousel-content-container">
					<button className="left-arrow">⬅</button>
					{movies &&
						movies.map((movie, index) => (
							<Link key={index}
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
					<button className="right-arrow">➡</button>
				</section>
			</Carousel>
			<header>TOP SERIES</header>
			<Carousel className="carousel-container">
				<section className="container carousel-content-container">
					<button className="left-arrow">⬅</button>
					{series &&
						series.map((show, index) => (
							<Link key={index}
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
					<button className="right-arrow">➡</button>
				</section>
			</Carousel>
			<header>TOP SPORTS</header>
			<Carousel className="carousel-container">
				<section className="container carousel-content-container">
					<button className="left-arrow">⬅</button>
					{sports &&
						sports.map((sport, index) => (
							<Link key={index}
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
					<button className="right-arrow">➡</button>
				</section>
			</Carousel>
			<header>TOP ROMANTIC COMEDIES</header>
			<Carousel className="carousel-container">
				<section className="container carousel-content-container">
					<button className="left-arrow">⬅</button>
					{romcoms &&
						romcoms.map((romcom, index) => (
							<Link key={index}
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
					<button className="right-arrow">➡</button>
				</section>
			</Carousel>
			<header>TOP STANDUP COMEDIES</header>
			<Carousel className="carousel-container">
				<section className="container carousel-content-container">
					<button className="left-arrow">⬅</button>
					{standups &&
						standups.map((standup, index) => (
							<Link key={index}
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
					<button className="right-arrow">➡</button>
				</section>
			</Carousel>
		</section>
	);
}

export default MoviesList;