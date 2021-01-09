import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Col,
  Button,
} from "reactstrap";
import { Link } from "@reach/router";
import style from "./MovieCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites } from "../features/counter/movieSlice";

const MovieCard = ({
  id,
  title,
  overview,
  img,
  margin,
  fromSimilar,
  setMovieQueryId,
}) => {
  const [isMouseIn, setMouseIn] = useState(false);
  const { movieReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const mouseEnterHandler = (e) => {
    setMouseIn(true);
  };
  const mouseLeaveHandler = (e) => {
    setMouseIn(false);
  };
  if (!img) {
    return null;
  }

  return (
    <>
      <div
        className="pointer"
        style={{
          backgroundColor: "red",
          color: "white",
          width: "17rem",
          marginBottom: "-1px",
          marginRight: `${margin}`,
        }}
        onClick={() =>
          dispatch(addFavorites({ id: id, fromSimilar: fromSimilar }))
        }
      >
        {movieReducer.favoritesIDs.includes(id)
          ? "Remove Favorite "
          : "Add Favorite"}
      </div>
      <Card
        style={{ width: "17rem", margin: "0 auto", marginRight: `${margin}` }}
        className="opacity"
        inverse
        onMouseLeave={mouseLeaveHandler}
        onMouseEnter={mouseEnterHandler}
      >
        <CardImg src={img} alt="Card image cap" />

        {isMouseIn ? (
          <>
            <div className={style.mask}></div>
            <CardImgOverlay className={style.fadeIn}>
              <CardTitle tag="h3">{title}</CardTitle>
              <CardText>
                {overview.length > 200
                  ? overview.substr(0, 200) + "..."
                  : overview}
              </CardText>
              <Link
                onClick={fromSimilar ? () => setMovieQueryId() : ""}
                to={`/movie/${id}`}
              >
                <Button color="secondary">Read More</Button>
              </Link>
            </CardImgOverlay>
          </>
        ) : (
          ""
        )}
      </Card>
    </>
  );
};

export default React.memo(MovieCard);
