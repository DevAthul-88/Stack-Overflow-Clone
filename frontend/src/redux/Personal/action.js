import {
  PERSONAL_REQUEST,
  PERSONAL_ANS_NEWEST,
  PERSONAL_ANS_OLDEST,
  PERSONAL_QUES_NEWEST,
  PERSONAL_QUES_OLDEST,
  PERSONAL_ERROR,
} from "./type";
import axios from "axios";
import Auth from "../../Config/header";

export const ansNewestAction = (userId) => async (dispatch) => {
  try {
    dispatch({ type: PERSONAL_REQUEST });

    const { data } = await axios.get(
      `/api/question/your/ans/newest/${userId}`,
      Auth
    );

    dispatch({ type: PERSONAL_ANS_NEWEST, payload: data.data });
  } catch (error) {
    dispatch({ type: PERSONAL_ERROR, payload: error.message });
  }
};

export const ansOldestAction = (userId) => async (dispatch) => {
  try {
    dispatch({ type: PERSONAL_REQUEST });

    const { data } = await axios.get(
      `/api/question/your/ans/oldest/${userId}`,
      Auth
    );

    dispatch({ type: PERSONAL_ANS_OLDEST, payload: data.data });
  } catch (error) {
    dispatch({ type: PERSONAL_ERROR, payload: error.message });
  }
};

export const quesOldestAction = (userId) => async (dispatch) => {
  try {
    dispatch({ type: PERSONAL_REQUEST });

    const { data } = await axios.get(
      `/api/question/your/ques/oldest/${userId}`,
      Auth
    );

    dispatch({ type: PERSONAL_QUES_OLDEST , payload: data.data });
  } catch (error) {
    dispatch({ type: PERSONAL_ERROR, payload: error.message });
  }
};

export const quesNewestAction = (userId) => async (dispatch) => {
  try {
    dispatch({ type: PERSONAL_REQUEST });

    const { data } = await axios.get(
      `/api/question/your/ques/newest/${userId}`,
      Auth
    );

    dispatch({ type: PERSONAL_QUES_NEWEST, payload: data.data });
  } catch (error) {
    dispatch({ type: PERSONAL_ERROR, payload: error.message });
  }
};
