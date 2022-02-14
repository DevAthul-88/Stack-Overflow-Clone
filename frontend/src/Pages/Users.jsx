import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { usersAction } from "../redux/Users/actions";
import Alert from "../Components/Alert";

function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersAction());
  }, []);
  const { loading, error } = useSelector((state) => state.users);
  return (
    <div>
      <Helmet>
        <title>Users - Stack Overflow</title>
      </Helmet>
      {
        error && <Alert type={'is-danger'} message={error} trigger={true}/>
      }
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
    </div>
  );
}

export default Users;
