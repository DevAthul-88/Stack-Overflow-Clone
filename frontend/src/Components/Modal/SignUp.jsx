import React, { useEffect } from "react";
import { SET_CURRENT_STATE } from "../../redux/AuthModal/type";
import { useDispatch , useSelector } from "react-redux";
import SignUpSchema from "../../Schema/SignUp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Alert from '../Alert';
import {registerAction} from '../../redux/Auth/action'

function SignUp() {
  const dispatch = useDispatch();
  const {loading , redirect , message, error} = useSelector((state) => state.auth)
  useEffect(() => {
    if(redirect){
      dispatch({
        type: SET_CURRENT_STATE,
        state: "Login",
        bool: true,
      })
    }
  },[redirect])
  return (
    <div>
      {
        error && <Alert type="is-danger" message={error} trigger={true}/>
      }
       {message !== undefined ? (
        <>
          {message ? (
            <Alert type="is-success" message={message} trigger={true} />
          ) : null}
        </>
      ) : null}
      
      <Formik
        initialValues={{
          userName:"",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values , { resetForm }) => {
          dispatch(registerAction(values))
          resetForm({});
        }}
      >
        {({ errors, touched }) => (
          <Form>
             <label className="label">UserName</label>
            <Field
              type="text"
              name="userName"
              className={`input model_input ${
                errors.userName && touched.userName ? " is-danger" : ""
              } `}
            />
            {errors.userName && touched.userName ? (
              <label className="label has-text-danger">{errors.userName}</label>
            ) : null}
            <label className="label mt-4">Email</label>
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

            <label className="label mt-4">Confirm Password</label>
            <Field
              type="password"
              name="passwordConfirmation"
              className={`input model_input ${
                errors.passwordConfirmation && touched.passwordConfirmation
                  ? " is-danger"
                  : ""
              } `}
            />
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
              <label className="label has-text-danger">
                {errors.passwordConfirmation}
              </label>
            ) : null}

            <div className="columns mt-4">
              <div className="column">
                <button type="submit" className={`button nav-btn ${loading ? "is-loading" : ""}`}>
                  SignUp
                </button>
              </div>
              <div className="column">
                <button
                  className="button"
                  onClick={() =>
                    dispatch({
                      type: SET_CURRENT_STATE,
                      state: "Login",
                      bool: true,
                    })
                  }
                >
                  Already have an account?
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
