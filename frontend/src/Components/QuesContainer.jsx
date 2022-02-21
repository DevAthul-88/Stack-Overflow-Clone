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
            <a
              href="#current"
              className={current == "newest" ? "tab-active" : ""}
              onClick={() => setCurrent('newest')}
            >
              Newest
            </a>
            <a
              href="#featured"
              className={current == "featured" ? "tab-active" : ""}
              onClick={() => setCurrent('featured')}
            >
              Featured
            </a>
            <a
              href="#unanswered"
              className={current == "unanswered" ? "tab-active" : ""}
              onClick={() => setCurrent('unanswered')}
            >
              Unanswered{" "}
            </a>
            <a
              href="#interesting"
              className={current == "interesting" ? "tab-active" : ""}
              onClick={() => setCurrent('interesting')}
            >
              Interesting
            </a>
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
