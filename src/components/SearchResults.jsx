import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import style from "./SearchResults.module.css";
const SearchResults = ({ data }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "420%",
        backgroundColor: "#8f8f8f",
        width: "75%",
        maxHeight: "22rem",
        overflowY: "scroll",
        padding: "1rem",
        transform: "translate(-50%,-50%)",
      }}
      className={style.searchArea}
    >
      {data.map((movie) => {
        console.log(movie);
        return (
          <div>
            <Card style={{ marginBottom: "1rem" }}>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{movie.original_title}</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>

            <div className="card-wrapper"></div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
