import { VOTE_ERROR, UP_VOTE, VOTE_REQUEST, DOWN_VOTE } from "./type";
import { SINGLE_SUCCESS, SINGLE_REQUEST } from "../Single/type";
import axios from "axios";
import config from "../../Config/header";

export const upVoteAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: VOTE_REQUEST });
    dispatch({ type: SINGLE_REQUEST });

    const { data } = await axios.post(`/api/question/upVote/${id}`, config);

    if (data.error) return dispatch({ type: VOTE_ERROR, payload: data.error });
    dispatch({ type: UP_VOTE });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: VOTE_ERROR, payload: error.message });
  }
};
