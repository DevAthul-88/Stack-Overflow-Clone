import {
  QUESTION_REQUEST,
  QUESTION_CREATE,
  QUESTION_ERROR,
  QUESTION_DELETE,
  QUESTION_EDIT,
} from "./type";
import axios from "axios";
import config from "../../Config/header";

export const createAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_REQUEST });

    const ques = {
      title: credentials.title,
      description: credentials.description,
      tags: credentials.tags.split(","),
    };

    const { data } = await axios.post("/api/question/create", ques, config);

    if (data.status) {
      dispatch({ type: QUESTION_CREATE, payload: data.status });
    }
  } catch (error) {
    dispatch({ type: QUESTION_ERROR, payload: error.message });
  }
};
