import React, { useState } from "react";
import { Link } from "wouter";
import Card from "../Components/Post/Card";

function QuesHeader() {
  const [current, setCurrent] = useState("newest");

  return (
    <div className="top">
      <h1 className="title has-text-weight-bold">Top Questions</h1>

      <div className="card">
        <div className="post-links">
          <div className="is-flex is-justify-content-space-between p-4 b-b">
            <a href="" className={current == "newest" ? "tab-active" : ""}>
              Newest
            </a>
            <a href="">Featured</a>
            <a href="">Unanswered </a>
            <a href="">Interesting</a>
          </div>
        </div>
        <div className="p-4 mt-5">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default QuesHeader;
