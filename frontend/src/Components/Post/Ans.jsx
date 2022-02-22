import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AnswerSchema from "../../Schema/Answer";
import { useSelector, useDispatch } from "react-redux";



function Comment({ id }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.comment);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div>
      <Formik
        initialValues={{
          answer: "",
          userId: userInfo._id,
          userName: userInfo.userName,
          date: Date.now(),
        }}
        validationSchema={AnswerSchema}
        onSubmit={(values) => {
          
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
            as="textarea"
              name="answer"
              placeholder="Enter your answer"
              className={`textarea model_input ${
                errors.answer && touched.answer ? " is-danger" : ""
              } `}
            ></Field>
            {errors.answer && touched.answer ? (
              <label className="label has-text-danger">{errors.answer}</label>
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
