import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieSlice, {
  getMovieDetails,
  getSimilarMovies,
} from "../features/counter/movieSlice";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Col,
  Button,
  Container,
  Row,
} from "reactstrap";
import MovieCard from "../components/MovieCards";
const Movie = ({ id }) => {
  const [movieQueryId, setMovieQueryId] = useState(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(movieQueryId));
    dispatch(getSimilarMovies(movieQueryId));
  }, [movieQueryId]);
  const { movieReducer } = useSelector((state) => state);

  return (
    <>
      <div style={{ backgroundColor: "rgb(230, 255, 255)" }}>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieReducer.movie.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            marginBottom: "14rem",
          }}
        >
          <div
            className="mask"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: 0.5,
              backgroundColor: "#000",
            }}
          ></div>
          <CardImg
            src={`https://image.tmdb.org/t/p/w500/${movieReducer.movie.poster_path}`}
            style={{
              width: "18rem",
              marginBottom: "-12rem",
              marginTop: "22rem",
              border: "1px solid #fff",
              position: "relative",
              zIndex: "2",
            }}
          />
        </div>
        <Container fluid="md">
          <Row>
            <Col sm="12" md="6">
              <h1>{movieReducer.movie.original_title}</h1>
              <h3 style={{ textAlign: "left" }}>Overview</h3>
              <p
                style={{
                  textAlign: "left",
                  marginBottom: "2rem",
                  fontWeight: "bold",
                  opacity: "0.8",
                }}
              >
                {movieReducer.movie.overview}
              </p>
            </Col>
            <Col sm="12" md="4">
              <div style={{ textAlign: "left" }}>
                <h3 style={{ textAlign: "left" }}>Genres</h3>
                {movieReducer.movie.genres
                  ? movieReducer.movie.genres.map((genre) => {
                      return (
                        <Button
                          style={{
                            textAlign: "left",
                            marginRight: "1rem",
                            marginBottom: "2rem",
                            opacity: "0.8",
                            fontWeight: "bold",
                          }}
                          outline
                          color="info"
                        >
                          {genre.name}
                        </Button>
                      );
                    })
                  : ""}
              </div>

              <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                <h3 style={{ textAlign: "left" }}>Production</h3>
                {movieReducer.movie.production_companies
                  ? movieReducer.movie.production_companies.map((company) => {
                      return (
                        <img
                          style={{
                            width: "5rem",
                            marginLeft: "2rem",
                            marginBottom: "2rem",
                          }}
                          src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                          alt=""
                        />
                      );
                    })
                  : ""}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <h3 style={{ textAlign: "left" }}>Visit IMDB Page</h3>
                <a
                  style={{ marginBottom: "5rem", textAlign: "left" }}
                  href={`https://www.imdb.com/title/${movieReducer.movie.imdb_id}`}
                >
                  <img
                    style={{ width: "5rem", height: "100%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                    alt=""
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ marginTop: "5rem" }}>
          <Row>
            <Col sm="12">
              <h3 style={{ marginBottom: "2rem" }}>You May Like These</h3>
              <div
                style={{
                  display: "flex",
                  overflowY: "hidden",
                  padding: ".5rem",
                  overflowX: "scroll",
                }}
              >
                {movieReducer.similarMovies.map((movie) => {
                  return (
                    <div>
                      <MovieCard
                        setMovieQueryId={() => setMovieQueryId(movie.id)}
                        fromSimilar="true"
                        margin={"2rem"}
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
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Movie;
