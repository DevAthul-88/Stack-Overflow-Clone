import React, { useState } from "react";
import Card from "../Components/Post/Card";
import Interesting from "../Pages/Tabs/Interesting";
import Featured from "../Pages/Tabs/Featured";
import Newest from "../Pages/Tabs/Newest";

function QuesHeader() {
  const [current, setCurrent] = useState("newest");

  const Main = () => {
    if (current === "newest") {
      return <Newest />;
    } else if (current === "interesting") {
      return <Interesting />;
    } else if (current === "featured") {
      return <Featured />;
    }
  };

  return (
    <div className="top">
      <h1 className="title has-text-weight-bold">Top Questions</h1>

      <div className="card">
        <div className="post-links">
          <div className="is-flex is-justify-content-space-between p-4 b-b">
            <a
              href="#current"
              className={current == "newest" ? "tab-active" : ""}
              onClick={() => setCurrent("newest")}
            >
              Newest
            </a>
            <a
              href="#featured"
              className={current == "featured" ? "tab-active" : ""}
              onClick={() => setCurrent("featured")}
            >
              Featured
            </a>

            <a
              href="#interesting"
              className={current == "interesting" ? "tab-active" : ""}
              onClick={() => setCurrent("interesting")}
            >
              Interesting
            </a>
          </div>
        </div>
        <div className="p-4 mt-5">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default QuesHeader;
