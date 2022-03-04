import React from "react";
import Oldest from "./Tabs/Personal/Oldest";
import Newest from "../Pages/Tabs/Personal/Newest";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

function YouAnswers() {
  const [current, setCurrent] = useState("newest");
  const { userInfo } = useSelector((state) => state.auth);
  const Main = () => {
    if (current === "newest") {
      return <Newest id={userInfo._id} />;
    } else if (current === "oldest") {
      return <Oldest id={userInfo._id} />;
    }
  };

  return (
    <div className="top">
      <Helmet>
        <title>Your answers - Stack Overflow</title>
      </Helmet>
      <h1 className="title has-text-weight-bold">Your answers</h1>

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
              href="#oldest"
              className={current == "oldest" ? "tab-active" : ""}
              onClick={() => setCurrent("oldest")}
            >
              Oldest
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

export default YouAnswers;
