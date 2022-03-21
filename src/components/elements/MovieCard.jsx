import React, { useState } from "react";
import Modal from "./MovieModal";
import MovieDetails from "./MovieDetails";
import { StyledMovieCard } from "../styles/StyledMovieCard";

const MovieCard = ({ image, clickable, movie }) => {
  const [isModal, setModal] = useState(false);
  
  return (
    <StyledMovieCard>
      <>
        <Modal isVisible={isModal} onClose={() => setModal(false)}>
          <MovieDetails movie={movie} />
        </Modal>
        {clickable ? (
          <>
            <img
              className="clickable"
              src={image}
              alt="moviecard"
              onClick={() => setModal(true)}
            />
            <div className="card-rating">
              <div>{movie.vote_average}</div>
            </div>
          </>
        ) : (
          <img src={image} alt="moviecard" />
        )}
      </>
    </StyledMovieCard>
  );
};


export default MovieCard;
