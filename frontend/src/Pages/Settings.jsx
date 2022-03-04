import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ProfileSchema from "../Schema/editProfile";
import { useDispatch, useSelector } from "react-redux";
import { editAction } from "../redux/Profile/action";
import Alert from "../Components/Alert";

function Settings() {
  const dispatch = useDispatch();
  const { loading, userInfo } = useSelector((state) => state.auth);
  const { loadings, user, error, edited } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    if (edited) {
      localStorage.setItem("user_stack", JSON.stringify(user));
      window.location.reload();
    }
  }, [edited]);

  return (
    <div>
      {error && <Alert type="is-danger" message={`${error}`} trigger />}
      <Helmet>
        <title>Settings - Stack Overflow</title>
      </Helmet>
      <Formik
        initialValues={{
          userName: userInfo.userName,
          about: userInfo.about == null ? "" : userInfo.about,
          email: userInfo.email,
        }}
        validationSchema={ProfileSchema}
        onSubmit={(values) => {
          dispatch(editAction(userInfo._id, values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h1 className="title">Settings</h1>

            <div className="box">
              <label className="label">Username</label>

              <Field
                type="text"
                name="userName"
                className={`input mt-2 ques_input ${
                  errors.userName && touched.userName ? " is-danger" : ""
                }`}
                placeholder="Your username"
              />

              {errors.userName && touched.userName ? (
                <label className="label has-text-danger">
                  {errors.userName}
                </label>
              ) : null}

              <label className="label mt-5">Email</label>

              <Field
                type="email"
                name="email"
                className={`input mt-2 ques_input ${
                  errors.email && touched.email ? " is-danger" : ""
                }`}
                placeholder="Your email"
              />

              {errors.email && touched.email ? (
                <label className="label has-text-danger">{errors.email}</label>
              ) : null}

              <label className="label mt-5">About - (optional)</label>

              <Field
                as="textarea"
                className={`textarea mt-2 ques_input ${
                  errors.about && touched.about ? " is-danger" : ""
                }`}
                name="about"
                id=""
                cols={30}
                rows={10}
                placeholder="Explain yourself here!"
              ></Field>

              {errors.about && touched.about ? (
                <label className="label has-text-danger">{errors.about}</label>
              ) : null}
            </div>
            <button
              className={`nav-btn button ${loadings ? "is-loading" : ""}`}
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Settings;
