import React from "react";

const MovieDetails = ({ movie }) => (
      <div>
        <h1 style={{color : 'white'}}>{movie.title}</h1>
        <p style={{color : 'white'}}>{movie.overview.substring(0, 119)}</p>
      </div>
);


export default MovieDetails;
