import { TAG_REQUEST, TAG_SUCCESS, TAG_ERROR } from "./type";
import axios from "axios";

export const tagAction = () => async (dispatch) => {
  try {
    dispatch({ type: TAG_REQUEST });

    const { data } = await axios.get("/api/question/tags");

    dispatch({ type: TAG_SUCCESS, payload: data.tag });
  } catch (error) {
    dispatch({ type: TAG_ERROR, payload: error.message });
  }
};
