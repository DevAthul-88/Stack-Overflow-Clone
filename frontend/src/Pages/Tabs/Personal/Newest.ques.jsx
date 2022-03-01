import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quesNewestAction } from "../../../redux/Personal/action";
import Card from "../../../Components/Post/Card";
import Loader from "../../../Components/Loader/Loader";

function Newest({id}) {
  const dispatch = useDispatch();
  const { loading,  data } = useSelector((state) => state.personal);
  useEffect(() => {
    dispatch(quesNewestAction(id));
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
