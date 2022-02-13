import React from "react";
import { SET_CURRENT_STATE } from "../../redux/AuthModal/type";
import { useDispatch } from "react-redux";
import SignUpSchema from "../../Schema/SignUp";
import { Formik, Form, Field, ErrorMessage } from "formik";

function SignUp() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={SignUpSchema}
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
                <button type="submit" className="button nav-btn">
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
