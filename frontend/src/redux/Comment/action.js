import { COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_ERROR } from "./type";
import axios from "axios";
import config from "../../Config/header";

export const commentAction = (postId, comment) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_REQUEST });
    const { data } = await axios.post(
      `/api/question/comment/${postId}`,
      comment,
      config
    );
    if (data.error)
      return dispatch({ type: COMMENT_ERROR, payload: data.error });

    dispatch({ type: COMMENT_SUCCESS });
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.message });
  }
};
