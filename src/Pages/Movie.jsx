import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../features/counter/movieSlice";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Col,
  Button,
} from "reactstrap";
const Movie = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);

  const { movieReducer } = useSelector((state) => state);
  console.log(movieReducer);
  return (
    <div style={{ backgroundColor: "rgb(230, 255, 255)" }}>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieReducer.movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          marginBottom: "12rem",
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
      <div style={{ padding: "0 2rem 0 2rem" }}>
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
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <h4 style={{ marginBottom: "3rem" }}>Visit IMDB Page</h4>
        <p
          style={{ position: "absolute", left: "50%", top: "2rem" }}
          className="arrow"
        >
          &darr;
        </p>
        <a
          style={{ marginBottom: "5rem" }}
          href={`https://www.imdb.com/title/${movieReducer.movie.imdb_id}`}
        >
          <img
            style={{ width: "5rem", height: "100%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Movie;
