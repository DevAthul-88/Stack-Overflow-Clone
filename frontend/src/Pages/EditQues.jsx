import React,{useEffect} from "react";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import QuestionSchema from "../Schema/Question";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../redux/Question/action";
import Alert from "../Components/Alert";
import QuesAction from "../redux/Single/action";
import Loader from "../Components/Loader/Loader";

function EditQues({ id }) {
  const dispatch = useDispatch();
  const {  created } = useSelector((state) => state.question);
  const { loading ,error, data } = useSelector((state) => state.single);
  useEffect(() => {
    dispatch(QuesAction(id))
  },[])
  return (
    <div>
      {created && (
        <Alert type="is-success" message="Post created successfully" trigger />
      )}
      <Helmet>
        <title>Edit question - Stack Overflow</title>
      </Helmet>
      {loading ? <div className="has-text-centered"><Loader /> </div> : <>
      {data == undefined ? <div className="has-text-centered"><Loader /></div> :  <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          tags:data.tags,
        }}
        validationSchema={QuestionSchema}
        onSubmit={(values , {resetForm}) => {
          dispatch(createAction(values))
           resetForm({})
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h1 className="title">Edit public question</h1>

            <div className="box">
              <label className="label">Title</label>
              <label htmlFor="">
                Be specific and imagine you’re asking a question to another
                person
              </label>
              <Field
                type="text"
                name="title"
                value={data.title}
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
                as="textarea"
                className={`textarea mt-2 ques_input ${
                  errors.description && touched.description ? " is-danger" : ""
                }`}
                name="description"
                id=""
                cols={30}
                rows={10}
                value={data.description}
                placeholder="Explain your question here!"
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
                value={data.tags}
                className={`input mt-2 ques_input ${
                  errors.tags && touched.tags ? " is-danger" : ""
                }`}
                placeholder="e.g (xml asp.net php html)"
              />
              {errors.tags && touched.tags ? (
                <label className="label has-text-danger">{errors.tags}</label>
              ) : null}
            </div>
            <button className={`nav-btn button ${loading ? "is-loading" : ""}`} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>}
      </>}
    </div>
  );
}

export default EditQues;
