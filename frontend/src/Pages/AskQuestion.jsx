import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import QuestionSchema from "../Schema/Question";

function AskQuestion() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          tags: "",
        }}
        validationSchema={QuestionSchema}
        onSubmit={(values) => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <h1 className="title">Ask a public question</h1>

            <div className="box">
              <label className="label">Title</label>
              <label htmlFor="">
                Be specific and imagine you’re asking a question to another
                person
              </label>
              <Field
                type="text"
                name="title"
                className={`input mt-2 ques_input ${
                  errors.title && touched.title ? " is-danger" : ""
                }`}
                placeholder="e.g How to center a div in css?"
              />

              {errors.title && touched.title ? (
                <label className="label has-text-danger">{errors.title}</label>
              ) : null}

              <label className="label mt-5">Question</label>
              <label>
                Include all the information someone would need to answer your
                question
              </label>

              <Field
                className={`textarea mt-2 ques_input ${
                  errors.description && touched.description ? " is-danger" : ""
                }`}
                name="description"
                id=""
                cols={30}
                rows={10}
              ></Field>

              {errors.description && touched.description ? (
                <label className="label has-text-danger">
                  {errors.description}
                </label>
              ) : null}

              <label className="label mt-4">Tags</label>
              <label>
                Add up to 5 tags to describe what your question is about
              </label>
              <Field
                type="text"
                name="tags"
                className={`input mt-2 ques_input ${
                  errors.tags && touched.tags ? " is-danger" : ""
                }`}
                placeholder="e.g (xml asp.net php html)"
              />
              {errors.tags && touched.tags ? (
                <label className="label has-text-danger">{errors.tags}</label>
              ) : null}
            </div>
            <button className="nav-btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AskQuestion;
