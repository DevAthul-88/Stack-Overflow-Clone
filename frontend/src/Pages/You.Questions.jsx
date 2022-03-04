import React from "react";
import Oldest from "./Tabs/Personal/Oldest.ques";
import Newest from "../Pages/Tabs/Personal/Newest.ques";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

function YouQuestions() {
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
        <title>Your questions - Stack Overflow</title>
      </Helmet>
      <h1 className="title has-text-weight-bold">Your questions</h1>

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

export default YouQuestions;
