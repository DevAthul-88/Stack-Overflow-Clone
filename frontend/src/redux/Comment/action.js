import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_ERROR,
  COMMENT_DELETE,
} from "./type";
import { SINGLE_SUCCESS, SINGLE_REQUEST } from "../Single/type";
import axios from "axios";
import config from "../../Config/header";

export const commentAction = (postId, comment) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_REQUEST });
    dispatch({ type: SINGLE_REQUEST });
    const { data } = await axios.post(
      `/api/question/comment/${postId}`,
      comment,
      config
    );
    if (data.error)
      return dispatch({ type: COMMENT_ERROR, payload: data.error });
    dispatch({ type: COMMENT_SUCCESS });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.message });
  }
};

export const commentDeleteAction = (postId, userId) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_REQUEST });
    const { data } = await axios.post(
      `/api/question/comment/delete/${postId}`,
      userId,
      config
    );
    if (data.error)
      return dispatch({ type: COMMENT_ERROR, payload: data.error });
    dispatch({ type: COMMENT_DELETE });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.message });
  }
};

