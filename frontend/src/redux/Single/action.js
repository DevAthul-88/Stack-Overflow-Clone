import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_ERROR } from "./type";
import axios from "axios";

const singleAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_REQUEST });

    const { data } = await axios.get(`/api/question/idle/${id}`);
    if (data.error)
      return dispatch({ type: SINGLE_ERROR, payload: data.error });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: SINGLE_ERROR, payload: error.message });
  }
};

export default singleAction;
