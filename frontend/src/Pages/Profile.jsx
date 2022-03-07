import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as timeago from "timeago.js";
import { Link } from "wouter";
import Helmet from "react-helmet";
import axios from "axios";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  const [count, setCount] = useState({});

  useEffect(() => {
    const fetchCount = async () => {
      const ds = await axios.get(`/api/question/count/${userInfo._id}`);
      setCount(ds.data);
    };
    fetchCount();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{`User ${userInfo.userName} - Stack Overflow`}</title>
      </Helmet>

      <div className="columns">
        <div className="column is-2">
          <img
            src={`https://secure.gravatar.com/avatar/${userInfo._id}?s=164&d=identicon`}
            alt="profile"
            className="image is-128x128"
            title={`${userInfo.userName}`}
          />
        </div>
        <div className="column ">
          <h1 className="title">{userInfo.userName}</h1>
          <h4 className="icon-text">
            <span className="icon">
              <i className="fa fa-birthday-cake fa-lg" aria-hidden="true"></i>
            </span>{" "}
            <span>Member for {timeago.format(userInfo.createdAt)}</span>
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
            {userInfo.about == null ? (
              <div>
                <h3 className="has-text-centered">
                  Your about me section is currently blank. Would you like to
                  add one?{" "}
                  <Link href="/settings" className=" blue_text">
                    Edit profile
                  </Link>
                </h3>
              </div>
            ) : (
              <h1>{userInfo.about}</h1>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div></div>
    </div>
  );
}

export default Profile;
