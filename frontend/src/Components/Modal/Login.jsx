import { SET_CURRENT_STATE } from "../../redux/AuthModal/type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginSchema from "../../Schema/Login";
import Alert from "../Alert";
import { loginAction } from "../../redux/Auth/action";

function Login() {
  const dispatch = useDispatch();
  const { message, error, loading , redirect , userInfo, token } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if(redirect){
      localStorage.setItem("user_stack" , JSON.stringify(userInfo))
      localStorage.setItem("token" , token)
      window.location.reload()
    }
  },[redirect])


  return (
    <div>
      {message !== undefined ? (
        <>
          {message ? (
            <Alert type="is-success" message={message} trigger={true} />
          ) : null}
        </>
      ) : null}
      {error !== undefined ? (
        <>
          {error ? (
            <Alert type="is-danger" message={error} trigger={true} />
          ) : null}
        </>
      ) : null}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          dispatch(loginAction(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label className="label">Email</label>
            <Field
              type="text"
              name="email"
              className={`input model_input ${
                errors.email && touched.email ? " is-danger" : ""
              } `}
            />
            {errors.email && touched.email ? (
              <label className="label has-text-danger">{errors.email}</label>
            ) : null}

            <label className="label mt-4">Password</label>
            <Field
              type="password"
              name="password"
              className={`input model_input ${
                errors.password && touched.password ? " is-danger" : ""
              } `}
            />
            {errors.password && touched.password ? (
              <label className="label has-text-danger">{errors.password}</label>
            ) : null}

            <div className="columns mt-4">
              <div className="column">
                <button
                  type="submit"
                  className={`button nav-btn ${loading ? "is-loading" : ""}`}
                >
                  Login
                </button>
              </div>
              <div className="column">
                <button
                  className=" button "
                  onClick={() =>
                    dispatch({
                      type: SET_CURRENT_STATE,
                      state: "SignUp",
                      bool: true,
                    })
                  }
                >
                  Don't have an account?
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
