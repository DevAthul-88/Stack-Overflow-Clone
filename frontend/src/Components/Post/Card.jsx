import React from "react";
import Data from "../../data";

function Card() {
  return (
    <div>
      {Data.map((e, index) => {
        return (
          <div key={index} className=" mb-4">
            <h1 className="title is-size-5">{e.title}</h1>
            <h4 className="subtitle mb-1 is-size-6 is-light">
              <span className="gray">answered on {e.date}</span> {" "}
              <a href="" className="blue_text">
                {e.user}
              </a>
            </h4>
            <div>
              <div className="columns mt-2">
                  <div className="column">
                  <div className="is-flex ">
                {e.tags.map((es, index) => {
                  return <div className="tag post_tag ml-2" key={index}>{es}</div>;
                })}
              </div>
                  </div>
                  <div className="column ">
                      <div className="tag ml-2">
                          {e.votes.length} Votes
                      </div>
                      <div className="tag is-success ml-2 is-light">
                          {e.answers.length} Answers
                      </div>
                      <div className="tag ml-2">
                          {e.views.length} Views
                      </div>
                  </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
