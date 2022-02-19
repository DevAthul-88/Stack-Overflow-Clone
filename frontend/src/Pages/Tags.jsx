import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Loader/Loader";
import Alert from "../Components/Alert";
import { tagAction } from "../redux/Tags/action";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'wouter'

function Tags() {
  const dispatch = useDispatch();
  const { loading, error, tags } = useSelector((state) => state.tag);
  useEffect(() => {
    dispatch(tagAction());
  }, []);
  return (
    <div>
      <Helmet>
        <title>Tags - Stack Overflow</title>
        <meta name="description" content="tags stack overflow" />
      </Helmet>
       {
         error && <Alert type={'is-danger'} message={error} trigger={true} />
       }
      {loading ? (
        <div className="is-flex is-justify-content-center"><Loader /></div>
      ) : (
        <>
          <h1 className="title has-text-weight-bold">Tags</h1>
          <p className="subtitle mt-4 is-size-6">
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
          <div className="columns">
            <div className="column">
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input model_input"
                    type="text"
                    placeholder="Filter by tag name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="column"></div>
          </div>

          <div className="card-container is-flex is-justify-content-space-between">

            {
              tags !== null && tags !== undefined ? (
               <>
               {
                 tags.map((e , index) => {
                   return (
                    <div className="tag-card card is-shadowless p-4" key={index}>
                    <div>
                      <div className="tag post_tag has-text-weight-bold">
                        <Link to={`/tags/${e._id}`}>{e._id}</Link>
                      </div>
                      <div className="mt-2 ">{e.count} questions</div>
                    </div>
                  </div>
                   )
                 })
               }
               
               </>
              ) : (<h1>No tags found.</h1>)
            }
            
          </div>
          



        </>
      )}
    </div>
  );
}

export default Tags;
