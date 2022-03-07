import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { usersAction, searchUsersAction } from "../redux/Users/actions";
import Alert from "../Components/Alert";
import Loader from "../Components/Loader/Loader";
import { Link } from "wouter";
import * as timeago from "timeago.js";

function Users() {
  const dispatch = useDispatch();
  const [state, setState] = useState("all");
  useEffect(() => {
    if (state === "all") {
      dispatch(usersAction());
    } else if (state === "") {
      dispatch(usersAction());
    } else {
      dispatch(searchUsersAction(state));
    }
  }, [state]);

  const { loading, error, allUsers } = useSelector((state) => state.users);
  const { userInfo } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    const { value } = event.target;
    setState(value);
  };

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
                onChange={handleChange}
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
                        {userInfo !== undefined && userInfo !== null ? (
                          <Link
                            href={
                              userInfo._id == e._id
                                ? `/profile`
                                : `/users/${e._id}`
                            }
                          >
                            {e.userName}
                          </Link>
                        ) : (
                          <Link href={`/users/${e._id}`}>{e.userName}</Link>
                        )}

                        <span className="is-block">
                          {timeago.format(e.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {allUsers.length == 0 ? <h1>No user found</h1> : null}
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
