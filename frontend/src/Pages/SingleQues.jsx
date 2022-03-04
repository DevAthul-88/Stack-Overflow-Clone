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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  upVoteAction,
  downVoteAction,
  upVoteAnsAction,
  downVoteAnsAction,
  UnUpVoteAction,
  UnDownVoteAction,
  UnUpVoteAnsAction,
  UnDownVoteAnsAction,
} from "../redux/Vote/action";
import AnswerForm from "../Components/Post/Ans";
import { answerDeleteAction } from "../redux/Answer/action";
import { Helmet } from "react-helmet";
import { DeleteAction } from "../redux/Question/action";
import ReactMarkdown from "react-markdown";

function SingleQues({ id }) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.single);
  const { deleted } = useSelector((state) => state.question);
  const { userInfo } = useSelector((state) => state.auth);
  const [showComment, setShowComment] = useState(false);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    dispatch(QuesAction(id));
    if (deleted) {
      window.location.href = "/";
    }
  }, [deleted]);

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
    if (userInfo == null || userInfo == undefined) {
      dispatch({ type: SET_CURRENT_STATE, state: "Login", bool: true });
    } else if (state == "up") {
      if (data.upVote.some((e) => e.userId == userInfo._id)) {
        dispatch(UnUpVoteAction(id, userInfo._id));
      } else {
        dispatch(upVoteAction(id, userInfo._id));
      }
    } else {
      if (data.downVote.some((e) => e.userId == userInfo._id)) {
        dispatch(UnDownVoteAction(id, userInfo._id));
      } else {
        dispatch(downVoteAction(id, userInfo._id));
      }
    }
  };

  const votes = (state, commentId) => {
    if (userInfo == null || userInfo == undefined) {
      dispatch({ type: SET_CURRENT_STATE, state: "Login", bool: true });
    } else if (state == "ups") {
      data.answer.forEach((e) => {
        if (e.id == commentId) {
          if (e.upVote.some((e) => e.userId == userInfo._id)) {
            dispatch(UnUpVoteAnsAction(id, commentId, userInfo._id));
          } else {
            dispatch(upVoteAnsAction(id, commentId, userInfo._id));
          }
        }
      });
    } else {
      data.answer.forEach((e) => {
        if (e.id == commentId) {
          if (e.downVote.some((e) => e.userId == userInfo._id)) {
            dispatch(UnDownVoteAnsAction(id, commentId, userInfo._id));
          } else {
            dispatch(downVoteAnsAction(id, commentId, userInfo._id));
          }
        }
      });
    }
  };

  const deleteAnswer = (id, userId, postId) => {
    if (window.confirm("Are you sure you want to delete this answer?")) {
      dispatch(answerDeleteAction(id, userId, postId));
    }
  };

  const deleteQues = (id) => {
    if (window.confirm("Are you sure you want to delete this question")) {
      dispatch(DeleteAction(id));
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
              <div className="is-flex is-justify-content-space-between">
                <span>Asked {timeago.format(data.createdAt)}</span>
                {userInfo !== null && userInfo !== undefined ? (
                  <>
                    {Object.keys(userInfo).length > 0 ? (
                      <div>
                        {userInfo._id === data.id ? (
                          <div>
                            <Link
                              href={`/edit/q/${data._id}`}
                              className="has-text-success mr-4"
                            >
                              Edit
                            </Link>
                            <a
                              className="has-text-danger"
                              onClick={() => deleteQues(data._id)}
                            >
                              Delete
                            </a>
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>
              <hr />

              <div className="columns">
                <div className="column is-1">
                  <button
                    className={`button vote_btn ${
                      userInfo !== null && userInfo !== undefined
                        ? data.upVote.some((e) => e.userId == userInfo._id)
                          ? "voted disabled"
                          : ""
                        : "disabled"
                    }`}
                    onClick={() => vote("up")}
                    disabled={
                      userInfo !== undefined && userInfo !== null
                        ? Object.keys(userInfo).length == 0
                        : true
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
                          ? "voted"
                          : ""
                        : null
                    }`}
                    onClick={() => vote()}
                    disabled={
                      userInfo !== undefined && userInfo !== null
                        ? Object.keys(userInfo).length == 0
                        : true
                    }
                  >
                    <span className="icon">
                      <i className="fas fa-caret-down fa-2x"></i>
                    </span>
                  </button>
                </div>
                <div className="column">
                  <div className="subtitle">
                    <ReactMarkdown
                      children={data.description}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, "")}
                              style={prism}
                              showLineNumbers
                              language={match[1]}
                              PreTag="div"
                              customStyle={{ background: "none" }}
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    />
                  </div>

                  <div className="is-flex is-justify-content-space-between mt-4">
                    <div>
                      {data.tags.map((e, index) => {
                        return (
                          <div className="tag post_tag is-medium" key={index}>
                            <Link href={"/tags/" + e}>{e}</Link>
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
              <div className="replay  p-1 " key={index}>
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
                      className="mr-2"
                    >
                      {e.userName}
                    </Link>{" "}
                    <span>{timeago.format(e.createdAt)}</span>
                    {userInfo !== null && userInfo !== undefined ? (
                      <span className="ml-2 ">
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
                  <a onClick={() => setShowComment(!showComment)}>
                    Add Comment
                  </a>
                )}
              </div>
            ) : null}
          </div>
          <hr />
          {showComment && <Comment id={id} />}

          <div className="ans mt-6">
            {data.answer.length == 0 ? (
              <h1>No answers</h1>
            ) : (
              <>
                <div className="is-flex mt-4 is-justify-content-space-between">
                  <div>
                    <h1 className="title  is-size-4">Answers</h1>
                  </div>
                </div>
                {data.answer.map((e, index) => {
                  return (
                    <div key={index} className="mt-4">
                      <div className="columns">
                        <div className="column is-1">
                          <button
                            className={`button vote_btn ${
                              userInfo !== null && userInfo !== undefined
                                ? e.upVote.some((e) => e.userId == userInfo._id)
                                  ? "voted"
                                  : ""
                                : null
                            }`}
                            onClick={() => votes("ups", e.id)}
                            disabled={
                              userInfo !== undefined && userInfo !== null
                                ? Object.keys(userInfo).length == 0
                                  ? true
                                  : false
                                : false
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
                                ? e.downVote.some(
                                    (e) => e.userId == userInfo._id
                                  )
                                  ? "voted"
                                  : ""
                                : null
                            }`}
                            onClick={() => votes("", e.id)}
                            disabled={
                              userInfo !== null && userInfo !== undefined
                                ? Object.keys(userInfo).length == 0
                                  ? true
                                  : false
                                : false
                            }
                          >
                            <span className="icon">
                              <i className="fas fa-caret-down fa-2x"></i>
                            </span>
                          </button>
                        </div>
                        <div className="column section">
                          <div className="subtitle">
                            <ReactMarkdown
                              children={e.answer}
                              components={{
                                code({
                                  node,
                                  inline,
                                  className,
                                  children,
                                  ...props
                                }) {
                                  const match = /language-(\w+)/.exec(
                                    className || ""
                                  );
                                  return !inline && match ? (
                                    <SyntaxHighlighter
                                      children={String(children).replace(
                                        /\n$/,
                                        ""
                                      )}
                                      style={prism}
                                      showLineNumbers
                                      language={match[1]}
                                      PreTag="div"
                                      customStyle={{ background: "none" }}
                                      {...props}
                                    />
                                  ) : (
                                    <code className={className} {...props}>
                                      {children}
                                    </code>
                                  );
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="is-flex is-justify-content-space-between">
                        <div>
                          <span>{timeago.format(e.date)}</span>

                          <Link
                            href={`${
                              userInfo !== null && userInfo !== undefined
                                ? userInfo._id == e.userId
                                  ? "/profile"
                                  : `/users/${e.userId}`
                                : `/users/${e.userId}`
                            }`}
                            className="ml-2"
                          >
                            {e.userName}
                          </Link>
                          {userInfo !== null && userInfo !== undefined ? (
                            <span className="ml-2 ">
                              {userInfo._id === e.userId ? (
                                <a
                                  className="has-text-danger"
                                  onClick={() =>
                                    deleteAnswer(id, e.userId, e.id)
                                  }
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
              </>
            )}
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
