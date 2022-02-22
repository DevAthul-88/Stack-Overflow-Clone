import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Components/Loader/Loader";
import Alert from "../Components/Alert";
import { useEffect } from "react";
import QuesAction from "../redux/Single/action";
import * as timeago from "timeago.js";
import Comment from "../Components/Post/Comment";
import { useState } from "react";
import { Link } from "wouter";
import { SET_CURRENT_STATE } from "../redux/AuthModal/type";
import {commentDeleteAction} from '../redux/Comment/action'
import {upVoteAction} from '../redux/Vote/action'

function SingleQues({ id }) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.single);
  const { userInfo } = useSelector((state) => state.auth);
  const [showComment, setShowComment] = useState(false);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    dispatch(QuesAction(id));
  }, []);

  const loadMore = () => {
    setLimit(limit + 5);
  };

  const deleteComment = (id , userId , commentId) => {
    if(window.confirm("Are you sure you want to delete this comment?")){
      
      dispatch(commentDeleteAction(id , {userId: userId , commentId: commentId}));
    }
  };

  const vote = () => {
    if (Object.keys(userInfo).length == 0) {
      dispatch({ type: SET_CURRENT_STATE, state: "Login", bool: true });
    }
    else{
      dispatch(upVoteAction(id))
    }
  };

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
                  <button className="button vote_btn " onClick={() => vote()}>
                    <span className="icon">
                      <i className="fas fa-caret-up fa-2x"></i>
                    </span>
                  </button>
                  <h5 className="is-size-4 ml-3">
                    {data.upVote.length > data.downVote.length
                      ? data.upVote.length
                      : data.downVote.length}
                  </h5>
                  <button className="button vote_btn " onClick={() => vote()}>
                    <span className="icon">
                      <i className="fas fa-caret-down fa-2x"></i>
                    </span>
                  </button>
                </div>
                <div className="column">
                  <p className="subtitle">{data.description}</p>

                  <div className="is-flex is-justify-content-space-between">
                    <div>
                      {data.tags.map((e, index) => {
                        return (
                          <div className="tag post_tag" key={index}>
                            {e}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <h5>
                        Asked{" "}
                        {userInfo !== null || userInfo !== undefined ? (
                          <Link
                            href={`${
                              userInfo._id === data.id
                                ? "/profile"
                                : `/users/${data.id}`
                            }`}
                          >
                            <a>{data.userName}</a>
                          </Link>
                        ) : (
                          <Link href={`/users/${data.id}`}>
                            <a>{data.userName}</a>
                          </Link>
                        )}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <hr />
          {data.replies.slice(0, limit).map((e, index) => {
            return (
              <div className="replay mb-1 p-1" key={index}>
                <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
                  <h6 className="is-capitalized">{e.comment}</h6>
                  <div>
                    <Link
                      href={`${
                        userInfo._id === e.userId
                          ? "/profile"
                          : `/users/${e.userId}`
                      }`}
                      style={{ fontSize: "10px" }}
                      className="mr-2"
                    >
                      {e.userName}
                    </Link>{" "}
                    <span style={{ fontSize: "10px" }}>
                      {timeago.format(e.createdAt)}
                    </span>
                    <span style={{ fontSize: "10px" }} className="ml-2 ">
                      {userInfo._id === e.userId ? (
                        <a className="has-text-danger" onClick={() => deleteComment(id , e.userId , e.commentId)}>Delete</a>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="is-flex mt-4 is-justify-content-space-between">
            {data.replies.length < limit ? null : (
              <a onClick={() => loadMore()}>Load More</a>
            )}
            {Object.keys(userInfo).length == 0 ? null : (
              <a onClick={() => setShowComment(!showComment)}>Add Comment</a>
            )}
          </div>
          {showComment && <Comment id={id} />}
          <hr />
        </>
      )}
    </div>
  );
}

export default SingleQues;
