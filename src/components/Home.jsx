import React, { useState, useEffect } from "react";
import {
  POPULAR_BASE_URL,
  POSTER_SIZE,
  IMAGE_BASE_URL,
} from "../API";
import MovieWall from "./elements/MovieWall";
import MovieCard from "./elements/MovieCard";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Home = () => {
  
  const [topMovies, setTopMovies] = useState([]);
  const [otherMovies, setOtherMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  
  useEffect(() => {
    getAllMovies();
  }, [])

  const getAllMovies = () => {
    axios.get(POPULAR_BASE_URL)
      .then(res => {
        let movies = res.data.results;
        let sortedMovies = movies.sort((a,b) => parseInt(b.vote_average) - parseInt(a.vote_average) );
        setTopMovies(sortedMovies.slice(0,10));
        setOtherMovies(sortedMovies.slice(10, sortedMovies.length - 1));
      })
      .catch(err => {
        setErrorMsg("cannot get all movies");
      })
  }
  

  if (errorMsg.length !== 0) return <div>Something went wrong ...</div>;
  if (!topMovies[0]) return <div>Please Wait ...</div>;
  return (
    <>
      <MovieWall header="Top Rated Movies">
        {topMovies.map((movie, index) => (
          <>
            <MovieCard
              key={index}
              clickable
              image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
              movieName={movie.original_title}
              movie={movie}
            />
          </>
        ))}
      </MovieWall>
      <MovieWall header="Rest of Movies"></MovieWall>
        <Carousel responsive={responsive}>
          {otherMovies.map((movie, index) => (
              <MovieCard
                key={index}
                clickable
                image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
                movieName={movie.original_title}
                movie={movie}
              />
          ))}
          </Carousel>
    </>
  );
};

export default Home;
