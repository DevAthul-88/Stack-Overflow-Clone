import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featuredAction } from "../../redux/Post/action";
import Card from "../../Components/Post/Card";
import Loader from "../../Components/Loader/Loader";

function Featured() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(featuredAction());
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

export default Featured;
