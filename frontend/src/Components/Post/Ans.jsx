import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AnswerSchema from "../../Schema/Answer";
import { useSelector, useDispatch } from "react-redux";
import {answerCreateAction} from '../../redux/Answer/action'
import { v4 as uuidv4 } from 'uuid';

function Comment({ id }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.answer);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="mt-4">
      <label htmlFor="" className="label">Define your answer - (Markdown supported)</label>
      <Formik
        initialValues={{
          id:uuidv4(),
          answer: "",
          userId: userInfo._id,
          userName: userInfo.userName,
          replies:[],
          upVote:[],
          downVote:[],
        }}
        validationSchema={AnswerSchema}
        onSubmit={(values) => {
           dispatch(answerCreateAction(id ,values))
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
