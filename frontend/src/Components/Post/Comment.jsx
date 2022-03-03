import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CommentSchema from "../../Schema/Comment";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { commentAction } from "../../redux/Comment/action";

function Comment({ id }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.comment);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div>
      <Formik
        initialValues={{
          comment: "",
          userId: userInfo._id,
          userName: userInfo.userName,
          date: Date.now(),
        }}
        validationSchema={CommentSchema}
        onSubmit={(values) => {
          dispatch(commentAction(id, values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
            as="textarea"
              name="comment"
              placeholder="Enter your comment"
              className={`textarea model_input ${
                errors.comment && touched.comment ? " is-danger" : ""
              } `}
            ></Field>
            {errors.comment && touched.comment ? (
              <label className="label has-text-danger">{errors.comment}</label>
            ) : null}
            <button
              className={`button nav-btn mt-2 ${loading && "is-loading"}`}
              type="submit"
            >
              Add Comment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Comment;
