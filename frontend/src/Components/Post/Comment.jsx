import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CommentSchema from "../../Schema/Comment";

function Comment() {
  return (
    <div>
      <Formik
        initialValues={{
          comment: "",
        }}
        validationSchema={CommentSchema}
        onSubmit={(values) => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <textarea
              name="comment"
              placeholder="Enter your comment"
              className={`textarea model_input ${
                errors.comment && touched.comment ? " is-danger" : ""
              } `}
            ></textarea>
            {errors.comment && touched.comment ? (
              <label className="label has-text-danger">{errors.comment}</label>
            ) : null}
            <button className="button nav-btn mt-2" type="submit">
              Add Comment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Comment;
