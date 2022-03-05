import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../Components/Post/Card";
import Loader from "../../../Components/Loader/Loader";
import { tagPostNewestAction } from "../../../redux/TagPosts/action";

function Newest({ Id }) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.tagPost);

  useEffect(() => {
    dispatch(tagPostNewestAction(Id));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="is-flex is-justify-content-center">
          <Loader />
        </div>
      ) : (
        <div>
          {data && (
            <>{data.length >= 1 ? <Card Data={data} /> : <h1>No data</h1>}</>
          )}
        </div>
      )}
    </div>
  );
}

export default Newest;
