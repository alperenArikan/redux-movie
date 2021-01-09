import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCards";
import { Container, Row, Col } from "reactstrap";
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
            <Col
              style={{ marginBottom: "1rem", position: "relative" }}
              xs="12"
              sm="6"
              md="4"
            >
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              ></MovieCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favorites;
