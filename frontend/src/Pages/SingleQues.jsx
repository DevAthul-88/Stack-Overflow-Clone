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
import { commentDeleteAction } from "../redux/Comment/action";
import {
  upVoteAction,
  downVoteAction,
  upVoteAnsAction,
  downVoteAnsAction,
} from "../redux/Vote/action";
import AnswerForm from "../Components/Post/Ans";
import { answerDeleteAction } from "../redux/Answer/action";
import { Helmet } from "react-helmet";

function SingleQues({ id }) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.single);
  const { userInfo } = useSelector((state) => state.auth);
  const [showComment, setShowComment] = useState(false);
  const [limit, setLimit] = useState(4);

  useEffect((e) => {
    dispatch(QuesAction(id));
  }, []);

  const loadMore = () => {
    setLimit(limit + 5);
  };

  const deleteComment = (id, userId, commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      dispatch(
        commentDeleteAction(id, { userId: userId, commentId: commentId })
      );
    }
  };

  const vote = (state, ansId) => {
    if (userInfo == null && userInfo == undefined) {
      dispatch({ type: SET_CURRENT_STATE, state: "Login", bool: true });
    } else if (state == "up") {
      dispatch(upVoteAction(id, userInfo._id));
    } else {
      dispatch(downVoteAction(id, userInfo._id));
    }
  };

  const votes = (state, commentId) => {
    if (userInfo == null && userInfo == undefined) {
      dispatch({ type: SET_CURRENT_STATE, state: "Login", bool: true });
    } else if (state == "ups") {
      dispatch(upVoteAnsAction(id, commentId, userInfo._id));
    } else {
      dispatch(downVoteAnsAction(id, commentId, userInfo._id));
    }
  };

  const deleteAnswer = (id, userId, postId) => {
    if (window.confirm("Are you sure you want to delete this answer?")) {
      dispatch(answerDeleteAction(id, userId, postId));
    }
  };

  return (
    <div>
      {data === null || data === undefined ? (
        <h1 className="title has-text-centered">
          <Loader />
        </h1>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <Helmet>
                <title>{data.title} - Stack Overflow</title>
                <meta name="description" content={data.description} />
              </Helmet>
              <h1 className="title">{data.title}</h1>
              <span>Asked {timeago.format(data.createdAt)}</span>
              <hr />

              <div className="columns">
                <div className="column is-1">
                  <button
                    className={`button vote_btn ${
                      userInfo !== null && userInfo !== undefined
                        ? data.upVote.some((e) => e.userId == userInfo._id)
                          ? "voted disabled"
                          : ""
                        : null
                    }`}
                    onClick={() => vote("up")}
                    disabled={
                      userInfo !== undefined && userInfo !== null
                        ? data.upVote.some((e) => e.userId == userInfo._id)
                        : ""
                    }
                  >
                    <span className="icon">
                      <i className="fas fa-caret-up fa-2x"></i>
                    </span>
                  </button>
                  <h5 className="is-size-4 ml-3">
                    {data.upVote.length == data.downVote.length ? (
                      data.upVote.length
                    ) : (
                      <>
                        {data.upVote.length > data.downVote.length
                          ? data.upVote.length
                          : -data.downVote.length}
                      </>
                    )}
                  </h5>
                  <button
                    className={`button vote_btn ${
                      userInfo !== null && userInfo !== undefined
                        ? data.downVote.some((e) => e.userId == userInfo._id)
                          ? "voted disabled"
                          : ""
                        : null
                    }`}
                    onClick={() => vote()}
                    disabled={
                      userInfo !== null && userInfo !== undefined
                        ? data.downVote.some((e) => e.userId == userInfo._id)
                        : ""
                    }
                  >
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
                              userInfo !== null && userInfo !== undefined
                                ? userInfo._id === data.id
                                  ? "/profile"
                                  : `/users/${data.id}`
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
              <div className="replay  p-1" key={index}>
                <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
                  <h6 className="is-capitalized">{e.comment}</h6>
                  <div>
                    <Link
                      href={`${
                        userInfo !== null && userInfo !== undefined
                          ? userInfo._id == e.userId
                            ? "/profile"
                            : `/users/${data.id}`
                          : `/users/${data.id}`
                      }`}
                      style={{ fontSize: "10px" }}
                      className="mr-2"
                    >
                      {e.userName}
                    </Link>{" "}
                    <span style={{ fontSize: "10px" }}>
                      {timeago.format(e.createdAt)}
                    </span>
                    {userInfo !== null && userInfo !== undefined ? (
                      <span style={{ fontSize: "10px" }} className="ml-2 ">
                        {userInfo._id === e.userId ? (
                          <a
                            className="has-text-danger"
                            onClick={() =>
                              deleteComment(id, e.userId, e.commentId)
                            }
                          >
                            Delete
                          </a>
                        ) : null}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="is-flex mt-4 is-justify-content-space-between">
            {data.replies.length < limit ? null : (
              <a onClick={() => loadMore()}>Load More</a>
            )}
            {userInfo !== null && userInfo !== undefined ? (
              <div>
                {Object.keys(userInfo).length == 0 ? null : (
                  <a
                    onClick={() => setShowComment(!showComment)}
                    style={{ fontSize: "10px" }}
                  >
                    Add Comment
                  </a>
                )}
              </div>
            ) : null}
          </div>
          {showComment && <Comment id={id} />}
          <div className="is-flex mt-4 is-justify-content-space-between">
            <div>
              <h1 className="title  is-size-4">Answers</h1>
            </div>

            <div>
              <div className="field has-addons">
                <p className="control">
                  <button className="button">
                    
                    <span>Oldest</span>
                  </button>
                </p>
                <p className="control">
                  <button className="button">
                    
                    <span>Score</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="ans mt-6">
            {data.answer.map((e, index) => {
              return (
                <div key={index}>
                  <div className="columns">
                    <div className="column is-1">
                      <button
                        className={`button vote_btn ${
                          userInfo !== null && userInfo !== undefined
                            ? e.upVote.some((e) => e.userId == userInfo._id)
                              ? "voted disabled"
                              : ""
                            : null
                        }`}
                        onClick={() => votes("ups", e.id)}
                        disabled={
                          userInfo !== undefined && userInfo !== null
                            ? e.upVote.some((e) => e.userId == userInfo._id)
                            : ""
                        }
                      >
                        <span className="icon">
                          <i className="fas fa-caret-up fa-2x"></i>
                        </span>
                      </button>
                      <h5 className="is-size-4 ml-3">
                        {e.upVote.length == e.downVote.length ? (
                          e.upVote.length
                        ) : (
                          <>
                            {e.upVote.length > e.downVote.length
                              ? e.upVote.length
                              : -e.downVote.length}
                          </>
                        )}
                      </h5>
                      <button
                        className={`button vote_btn ${
                          userInfo !== null && userInfo !== undefined
                            ? e.downVote.some((e) => e.userId == userInfo._id)
                              ? "voted disabled"
                              : ""
                            : null
                        }`}
                        onClick={() => votes("", e.id)}
                        disabled={
                          userInfo !== null && userInfo !== undefined
                            ? e.downVote.some((e) => e.userId == userInfo._id)
                            : ""
                        }
                      >
                        <span className="icon">
                          <i className="fas fa-caret-down fa-2x"></i>
                        </span>
                      </button>
                    </div>
                    <div className="column">
                      <h1 className="is-capitalized">{e.answer}</h1>
                    </div>
                  </div>
                  <div className="is-flex is-justify-content-space-between">
                    <div>
                      <span>{timeago.format(e.createdAt)}</span>

                      <Link
                        href={`${
                          userInfo !== null && userInfo !== undefined
                            ? userInfo._id == e.userId
                              ? "/profile"
                              : `/users/${data.id}`
                            : `/users/${data.id}`
                        }`}
                        style={{ fontSize: "10px" }}
                        className="ml-2"
                      >
                        {e.userName}
                      </Link>
                      {userInfo !== null && userInfo !== undefined ? (
                        <span style={{ fontSize: "10px" }} className="ml-2 ">
                          {userInfo._id === e.userId ? (
                            <a
                              className="has-text-danger"
                              onClick={() => deleteAnswer(id, e.userId, e.id)}
                            >
                              Delete
                            </a>
                          ) : null}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>

          {userInfo !== null && userInfo !== undefined ? (
            <div>
              {Object.keys(userInfo).length == 0 ? (
                <Alert
                  type={"is-info"}
                  message="Login in order to add a answer."
                  trigger={true}
                />
              ) : (
                <div>
                  {userInfo._id == data.id ? null : <AnswerForm id={id} />}
                </div>
              )}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default SingleQues;
