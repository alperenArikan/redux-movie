import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { useDispatch, useSelector } from "react-redux";
import { getTrends } from "../features/counter/movieSlice";
import MovieCard from "../components/MovieCards";
import { Container, Row } from "reactstrap";
const Home = () => {
  const { movieReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrends());
  }, []);

  return (
    <div>
      <Jumbotron></Jumbotron>

      <Container fluid="md">
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {movieReducer.searchedMovies.length === 0
            ? movieReducer.trendingMovies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    overview={movie.overview}
                    img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  ></MovieCard>
                );
              })
            : movieReducer.searchedMovies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    overview={movie.overview}
                    img={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : null
                    }
                  ></MovieCard>
                );
              })}
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(Home);
