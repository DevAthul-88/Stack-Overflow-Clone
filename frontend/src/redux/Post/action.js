import {
  QUES_FEATURED,
  QUES_NEWEST,
  QUES_REQUEST,
  QUES_ERROR,
  QUES_INTERESTING,
  QUES_UNANSWERED,
} from "./type";
import axios from "axios";

export const newestAction = () => async (dispatch) => {
  try {
    dispatch({ type: QUES_REQUEST });

    const { data } = await axios.get("/api/question/newest");

    if (data.error) {
      dispatch({ type: QUES_ERROR, payload: data.error });
    }

    dispatch({ type: QUES_NEWEST, payload: data.data });
  } catch (error) {
    dispatch({ type: QUES_ERROR, payload: error.message });
  }
};

export const featuredAction = () => async (dispatch) => {
  try {
    dispatch({ type: QUES_REQUEST });

    const { data } = await axios.get("/api/question/featured");

    if (data.error) {
      dispatch({ type: QUES_ERROR, payload: data.error });
    }

    dispatch({ type: QUES_FEATURED, payload: data.data });
  } catch (error) {
    dispatch({ type: QUES_ERROR, payload: error.message });
  }
};

export const interestingAction = () => async (dispatch) => {
  try {
    dispatch({ type: QUES_REQUEST });

    const { data } = await axios.get("/api/question/inter");

    if (data.error) {
      dispatch({ type: QUES_ERROR, payload: data.error });
    }

    dispatch({ type: QUES_INTERESTING, payload: data.data });
  } catch (error) {
    dispatch({ type: QUES_ERROR, payload: error.message });
  }
};