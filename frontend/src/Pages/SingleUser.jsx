import React, { useState } from "react";
import { profileAction } from "../redux/Profile/action";
import Alert from "../Components/Alert";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../Components/Loader/Loader";
import { Helmet } from "react-helmet";
import * as timeago from "timeago.js";
import axios from "axios";
import Card from "../Components/Post/Card";

function SingleUser({ id }) {
  const dispatch = useDispatch();
  const { loading, error, profile } = useSelector((state) => state.profile);
  const [post, setPost] = useState([]);
  const [count, setCount] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(profileAction(id));

    const fetchPosts = async () => {
      const { data } = await axios.get(`/api/question/user/post/${id}`);
      const ds = await axios.get(`/api/question/count/${id}`);
      setCount(ds.data);
      setPost(data.data);
      setLoader(false);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {profile == null ? (
        <div className="is-flex is-justify-content-center">
          <Loader />
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="is-flex is-justify-content-center">
              <Loader />
            </div>
          ) : (
            <div>
              {error ? (
                <Alert type={"is-danger"} trigger={true} message={error} />
              ) : (
                <div>
                  <Helmet>
                    <title>{`Users ${profile.userName} - Stack Overflow`}</title>
                  </Helmet>

                  <div className="columns">
                    <div className="column is-2">
                      <img
                        src={`https://secure.gravatar.com/avatar/${profile._id}?s=164&d=identicon`}
                        alt="profile"
                        className="image is-128x128"
                        title={`${profile.userName}`}
                      />
                    </div>
                    <div className="column ">
                      <h1 className="title">{profile.userName}</h1>
                      <h4 className="icon-text">
                        <span className="icon">
                          <i
                            className="fa fa-birthday-cake fa-lg"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        <span>
                          Member for {timeago.format(profile.createdAt)}
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column is-4">
                      <h1>Stats</h1>
                      <div className="card profile_card is-shadowless mt-4 p-4">
                        <nav className="level  is-mobile">
                          <div className="level-item">
                            <div>
                              <p className="heading">Questions</p>
                              <p className="is-size-5">{count.quesCount}</p>
                            </div>
                          </div>
                          <div className="level-item">
                            <div>
                              <p className="heading">Answers</p>
                              <p className="is-size-5">{count.ansCount}</p>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>

                    <div className="column">
                      <h1>About</h1>
                      <div className="card profile_card is-shadowless p-4 mt-4">
                        {profile.about == null ? (
                          <div>
                            <h3 className="has-text-centered">
                              This user hasn’t a about section.
                            </h3>
                          </div>
                        ) : (
                          <h1>{profile.about}</h1>
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <h1>Posts</h1>

                    {loader ? (
                      <div className="has-text-centered mt-4">
                        <Loader />
                      </div>
                    ) : (
                      <>
                        {post !== undefined ? (
                          <>
                            {post.length > 0 ? (
                              <div className="mt-6">
                                <Card Data={post} />
                              </div>
                            ) : (
                              <div className="card p-4 is-shadowless profile_card mt-4">
                                <h1>This user hasn’t posted yet.</h1>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="card p-4 is-shadowless profile_card mt-4">
                            <h1>This user hasn’t posted yet.</h1>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleUser;
