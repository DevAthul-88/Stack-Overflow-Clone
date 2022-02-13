import React from "react";
import RightContainer from "../Components/RightContainer";
import QuesContainer from "../Components/QuesContainer";
import { Helmet } from "react-helmet";

function Questions() {
  return (
    <div className="columns">
      <Helmet>
        <title>Questions - Stack Overflow</title>
        <meta name="description" content="questions stack overflow" />
      </Helmet>
      <div className="column is-9">
        <div>
          <QuesContainer />
        </div>
      </div>
      <div className="column">
        <RightContainer />
      </div>
    </div>
  );
}

export default Questions;
