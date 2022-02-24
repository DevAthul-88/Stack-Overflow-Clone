import {
  QUESTION_REQUEST,
  QUESTION_CREATE,
  QUESTION_ERROR,
  QUESTION_DELETE,
  QUESTION_EDIT_REQUEST,
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

export const EditAction = (credentials) => async (dispatch) => {
 
  try { 
    
    dispatch({ type: QUESTION_EDIT_REQUEST });
    const ques = {
      title: credentials.title,
      description: credentials.description,
      tags: credentials.tags,
      userId: credentials.userId,
      quesId: credentials.quesId
    };

    const { data } = await axios.put("/api/question/edit", ques, config);

    if (data.status) {
    }
    dispatch({ type: QUESTION_EDIT, payload: data.status });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: QUESTION_ERROR, payload: error.message });
  }
};
