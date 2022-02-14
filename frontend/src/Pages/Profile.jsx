import React from "react";
import { useSelector } from "react-redux";
import * as timeago from "timeago.js";
import { Link } from "wouter";
import Helmet from 'react-helmet'

function Profile() {
  const { state } = useSelector((state) => state.auth);
  return (
    <div>
      <Helmet>
        <title>{`User ${state.user.userName} - Stack Overflow`}</title>
      </Helmet>

      <div className="columns">
        <div className="column is-2">
          <img
            src={`https://secure.gravatar.com/avatar/${state.user._id}?s=164&d=identicon`}
            alt="profile"
            className="image is-128x128"
            title={`${state.user.userName}`}
          />
        </div>
        <div className="column ">
          <h1 className="title">{state.user.userName}</h1>
          <h4 className="icon-text">
            <span className="icon">
              <i className="fa fa-birthday-cake fa-lg" aria-hidden="true"></i>
            </span>{" "}
            <span>Member for {timeago.format(state.user.createdAt)}</span>
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
                  <p className="heading">Reputation</p>
                  <p className="is-size-5">{state.user.reputation}</p>
                </div>
              </div>
              <div className="level-item">
                <div>
                  <p className="heading">Questions</p>
                  <p className="is-size-5">0</p>
                </div>
              </div>
            </nav>

            <nav className="level is-mobile">
              <div className="level-item">
                <div>
                  <p className="heading">Answers</p>
                  <p className="is-size-5">{state.user.reputation}</p>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="column">
          <h1>About</h1>
          <div className="card profile_card is-shadowless p-4 mt-4">
            {state.about == null ? (
              <div>
                <h3 className="has-text-centered">
                  Your about me section is currently blank. Would you like to
                  add one?{" "}
                  <Link href="/profile/settings" className=" blue_text">
                    Edit profile
                  </Link>
                </h3>
              </div>
            ) : (
              <h1>{state.user.about}</h1>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h1>Posts</h1>

        <div className="card p-4 is-shadowless profile_card mt-4">
          <h1>Just getting started? Try answering a question!</h1>
        </div>

      </div>
    </div>
  );
}

export default Profile;
