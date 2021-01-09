import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCards";
import { Container, Row } from "reactstrap";
const Favorites = () => {
  const { movieReducer } = useSelector((state) => state);

  return (
    <Container fluid="md">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {movieReducer.favoriteMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            ></MovieCard>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favorites;
