import { SET_CURRENT_STATE } from "../../redux/AuthModal/type";
import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginSchema from "../../Schema/Login";
import Alert from '../Alert'

function Login() {
  const dispatch = useDispatch();
  const {state} = useSelector((state) => state.auth)
  console.log(state.message);
  return (
    <div>
      {
        state.message ? <Alert type="is-success" message={state.message} trigger={true}/> : null
      }
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
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
                <button  type="submit" className="button nav-btn">Login</button>
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
