import React from "react";
import Interesting from "../Pages/Tabs/Tags/Interesting";
import Featured from "../Pages/Tabs/Tags/Featured";
import Newest from "../Pages/Tabs/Tags/Newest";
import { useState } from "react";
import { Helmet } from "react-helmet";

function TagsQues({ id }) {
  const [current, setCurrent] = useState("newest");

  const Main = () => {
    if (current === "newest") {
      return <Newest Id={id} />;
    } else if (current === "interesting") {
      return <Interesting Id={id} />;
    } else if (current === "featured") {
      return <Featured Id={id} />;
    }
  };

  return (
    <div className="top">
      <Helmet>
        <title>Bountied '{id}' questions - Stack Overflow</title>
      </Helmet>
      <h1 className="title has-text-weight-bold">Questions tagged [{id}]</h1>

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

export default TagsQues;
