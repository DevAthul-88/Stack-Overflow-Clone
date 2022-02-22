import {
  ANSWER_REQUEST,
  ANSWER_SUCCESS,
  ANSWER_ERROR,
  ANSWER_DELETE,
} from "./type";
import { SINGLE_SUCCESS, SINGLE_REQUEST } from "../Single/type";

import config from "../../Config/header";
import axios from "axios";

export const answerCreateAction = (id, answer) => async (dispatch) => {
  try {
    dispatch({ type: ANSWER_REQUEST });
    // dispatch({ type: SINGLE_REQUEST });
    const { data } = await axios.post(
      `/api/question/answer/${id}`,
      answer,
      config
    );
    // dispatch({ type: SINGLE_REQUEST, payload: data.data });
    dispatch({ type: ANSWER_SUCCESS });
  } catch (error) {
    dispatch({ type: ANSWER_ERROR, payload: error.message });
  }
};
