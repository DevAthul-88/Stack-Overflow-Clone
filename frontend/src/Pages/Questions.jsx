import React from "react";
import QuesContainer from "../Components/QuesContainer";
import { Helmet } from "react-helmet";

function Questions() {
  return (
    <div className="columns">
      <Helmet>
        <title>Questions - Stack Overflow</title>
        <meta name="description" content="questions stack overflow" />
      </Helmet>
      <div className="column">
        <div>
          <QuesContainer />
        </div>
      </div>
    </div>
  );
}

export default Questions;
