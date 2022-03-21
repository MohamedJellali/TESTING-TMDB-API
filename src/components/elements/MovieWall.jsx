import React from "react";

// Styled Components
import {
  StyledMovieWall,
  StyledMovieWallContent,
} from "../styles/StyledMovieWall";

const MovieWall = ({ header, children }) => (
  <StyledMovieWall>
    <h1>{header}</h1>
    <StyledMovieWallContent>{children}</StyledMovieWallContent>
  </StyledMovieWall>
);

export default MovieWall;
