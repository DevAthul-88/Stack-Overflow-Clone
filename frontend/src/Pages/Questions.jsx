import React from "react";
import {Link} from 'wouter'

function Questions() {
  return (
    <div className="">
      <div className="top">
        <div className="columns">
          <div className="column">
          <h1 className="title is-size-5">All Questions</h1>
          </div>
          <div className="column">
          <Link href="#" className="nav-btn is-medium">
          Ask question
          </Link>
          </div>
        </div>

        <div className="columns">
          <div className="column">
          <h1 className="title is-size-5">22,231,338 questions</h1>
          </div>
          <div className="column">
          <Link href="#" className="nav-btn is-medium">
          Ask question
          </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Questions;
