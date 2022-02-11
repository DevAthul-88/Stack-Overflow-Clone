import React from "react";
import Tags from '../Components/Tags/Tags'
import QuesContainer from '../Components/QuesHeader'

function Questions() {
  return (
    <div className="columns">
      <div className="column is-9">
        <div>
        <QuesContainer/>
        </div>
      </div>
      <div className="column">
        <Tags />
      </div>
    </div>
  );
}

export default Questions;
