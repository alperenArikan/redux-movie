import React from "react";
import { Jumbotron } from "reactstrap";
import HomeHeader from "../images/home-header.jpg";
const JumbotronComponent = ({ background }) => {
  return (
    <div>
      <Jumbotron
        style={{ position: "relative", minHeight: "60vh", maxHeight: "1000px" }}
      >
        <img
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "0",
          }}
          src={HomeHeader}
          alt=""
        />
        <h2
          style={{ position: "relative", zIndex: "2", color: "white" }}
          className="display-3"
        >
          Trending Movies of the Week!
        </h2>
        <p
          style={{
            position: "relative",
            zIndex: "2",
            color: "white",
            fontWeight: "bold",
          }}
          className="lead"
        >
          Let's discover the latest trends!
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
