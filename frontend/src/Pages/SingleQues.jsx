import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Components/Loader/Loader";
import Alert from "../Components/Alert";
import { useEffect } from "react";
import QuesAction from "../redux/Single/action";
import * as timeago from "timeago.js";
import Comment from '../Components/Post/Comment'
import { useState } from "react";


function SingleQues({ id }) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.single);
  const [showComment , setShowComment] = useState(false)
  useEffect(() => {
    dispatch(QuesAction(id));
  }, []);

  return (
    <div>
      {data === null || data === undefined ? (
        <h1 className="title has-text-centered">No data</h1>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <h1 className="title">{data.title}</h1>
              <span>Asked {timeago.format(data.createdAt)}</span>
              <hr />

              <div className="columns">
                <div className="column is-1">
                  <button className="button">
                    <span className="icon">
                      <i className="fas fa-caret-up fa-2x"></i>
                    </span>
                  </button>
                  <h5 className="is-size-4 ml-3">
                    {data.upVote.length > data.downVote.length
                      ? data.upVote.length
                      : data.downVote.length}
                  </h5>
                  <button className="button">
                    <span className="icon">
                      <i className="fas fa-caret-down fa-2x"></i>
                    </span>
                  </button>
                </div>
                <div className="column">
                  <p className="subtitle">{data.description}</p>
                
                 <div className="is-flex is-justify-content-space-between">
                 <div>
                 {data.tags.map((e  , index) => {
                   return <div className="tag post_tag" key={index}>
                     {e}
                   </div>
                 })}
                 </div>
                 <div>
                   <h5>
                     Asked {" "} <a>{data.userName}</a>
                   </h5>
                 </div>
                 </div>
                
                </div>
              
              </div>
            </div>
          )}
            <hr />
            <a onClick={() => setShowComment(!showComment)}>Add Comment</a>
            {showComment && <Comment />}
            <hr />
        </>
      )}
    </div>
  );
}

export default SingleQues;
