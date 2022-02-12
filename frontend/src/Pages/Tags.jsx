import React from "react";

function Tags() {
  return (
    <div>
      <h1 className="title has-text-weight-bold">Tags</h1>
      <p className="subtitle mt-4 is-size-6">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </p>
      <div className="columns">
        <div className="column">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Filter by tag name"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="column">
         
        </div>
      </div>

        <div className="card-container is-flex ">
        <div className="tag-card card is-shadowless p-5">
          <div>
          <div className="tag post_tag has-text-weight-bold">
            Javascript
          </div>
         <div className="mt-2 ">
         44 questions
         </div>
          </div>
        </div>
        </div>

    </div>
  );
}

export default Tags;
