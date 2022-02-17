import {
  QUESTION_REQUEST,
  QUESTION_CREATE,
  QUESTION_ERROR,
  QUESTION_DELETE,
  QUESTION_EDIT,
} from "./type";
import axios from "axios";

export const createAction = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/question/create", credentials);
  } catch (error) {
    dispatch({ type: QUESTION_ERROR, payload: error.message });
  }
};
