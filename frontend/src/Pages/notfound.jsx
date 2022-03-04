import React from "react";
import notfounds from "../assets/404.png";
import { Helmet } from "react-helmet";

function notfound() {
  return (
    <div className="container">
      <Helmet>
        <title>Page not found - Stack Overflow</title>
      </Helmet>
      <div className="is-flex is-justify-content-center">
        <div>
          <img src={notfounds} alt="notfound" className="images" />

          <h1 className="title">Dog ate this page....</h1>
        </div>
      </div>
    </div>
  );
}

export default notfound;
