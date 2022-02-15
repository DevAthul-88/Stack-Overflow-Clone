import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { usersAction } from "../redux/Users/actions";
import Alert from "../Components/Alert";
import Loader from "../Components/Loader/Loader";
import { Link } from "wouter";
import * as timeago from 'timeago.js'

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction());
  }, []);

  const { loading, error, allUsers } = useSelector((state) => state.users);
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <div>
      <Helmet>
        <title>Users - Stack Overflow</title>
      </Helmet>
      {error && <Alert type={"is-danger"} message={error} trigger={true} />}

      <h2 className="title">Users</h2>
      <div className="columns">
        <div className="column">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input model_input"
                type="text"
                placeholder="Filter by user name"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="column"></div>
      </div>

      {loading ? (
        <div className="mt-6 is-flex is-justify-content-center">
          <Loader />
        </div>
      ) : (
        <div>
          {allUsers ? (
            <div className="columns  is-multiline">
              {allUsers.map((e, index) => {
                return (
                  <div key={index} className="column is-3">
                     <div className="is-flex">
                      <div>
                        <img
                          src={`https://secure.gravatar.com/avatar/${e._id}?s=164&d=identicon`}
                          alt="avatar"
                          className="users_avatar"
                        />
                      </div>
                      <div className="ml-4">
                        <Link href={userInfo._id == e._id ? `/profile` : `/users/${e._id}`}>
                        {e.userName}
                        </Link>
                       
                        <span className="is-block">
                         {timeago.format(e.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>Nothing Found</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Users;
