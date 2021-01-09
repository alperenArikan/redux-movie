import React from "react";
import { Jumbotron } from "reactstrap";

const JumbotronComponent = ({ background }) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Trending Movies of the Week!</h1>
        <p className="lead">Let's discover the latest trends!</p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
