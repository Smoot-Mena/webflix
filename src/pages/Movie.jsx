import React from 'react'

function Movie( {movie} ) {
    
    return (
        <section><form onSubmit={handleSubmit}>
        {data && (
          <section>
            <h1>{data.Title}</h1>
            <h2>{data.Year}</h2>
            <img src={data.Poster} alt="" />
            <p>{data.Ratings[0].Value}</p>
          </section>
        )}
        </form>
        This is the movie page.
        </section>
    )
}

export default Movie;

