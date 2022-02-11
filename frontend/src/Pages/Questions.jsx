import React from "react";
import RightContainer from '../Components/RightContainer'
import QuesContainer from '../Components/QuesContainer'

function Questions() {
  return (
    <div className="columns">
      <div className="column is-9">
        <div>
        <QuesContainer/>
        </div>
      </div>
      <div className="column">
        <RightContainer />
      </div>
    </div>
  );
}

export default Questions;
