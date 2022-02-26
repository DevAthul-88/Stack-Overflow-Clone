import { TAG_POST_REQUEST, TAG_POST_SUCCESS, TAG_POST_ERROR } from "./type";
import axios from "axios";

export const tagPostNewestAction = (tag) => async (dispatch) => {
  try {
    dispatch({ type: TAG_POST_REQUEST });

    const { data } = await axios.get(`/api/question/tags/${tag}`);

    dispatch({ type: TAG_POST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: TAG_POST_ERROR, payload: error.message });
  }
};
