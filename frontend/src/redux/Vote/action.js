import { VOTE_ERROR, UP_VOTE, VOTE_REQUEST, DOWN_VOTE } from "./type";
import { SINGLE_SUCCESS, SINGLE_REQUEST } from "../Single/type";
import axios from "axios";
import config from "../../Config/header";

export const upVoteAction = (id, userId) => async (dispatch) => {
  try {
    dispatch({ type: VOTE_REQUEST });

    dispatch({ type: SINGLE_REQUEST });

    const { data } = await axios.post(
      `/api/question/upVote/${id}`,
      { user: userId },
      config
    );

    if (data.error) return dispatch({ type: VOTE_ERROR, payload: data.error });
    dispatch({ type: UP_VOTE });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: VOTE_ERROR, payload: error.message });
  }
};

export const UnUpVoteAction = (id, userId) => async (dispatch) => {
  try {
    dispatch({ type: VOTE_REQUEST });

    dispatch({ type: SINGLE_REQUEST });

    const { data } = await axios.post(
      `/api/question/UnUpVote/${id}`,
      { user: userId },
      config
    );

    if (data.error) return dispatch({ type: VOTE_ERROR, payload: data.error });
    dispatch({ type: UP_VOTE });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: VOTE_ERROR, payload: error.message });
  }
};

export const UnDownVoteAction = (id, userId) => async (dispatch) => {
  try {
    dispatch({ type: VOTE_REQUEST });

    dispatch({ type: SINGLE_REQUEST });

    const { data } = await axios.post(
      `/api/question/UnDownVote/${id}`,
      { user: userId },
      config
    );

    if (data.error) return dispatch({ type: VOTE_ERROR, payload: data.error });
    dispatch({ type: UP_VOTE });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: VOTE_ERROR, payload: error.message });
  }
};

export const downVoteAction = (id, userId) => async (dispatch) => {
  try {
    dispatch({ type: VOTE_REQUEST });

    dispatch({ type: SINGLE_REQUEST });

    const { data } = await axios.post(
      `/api/question/downVote/${id}`,
      { user: userId },
      config
    );

    if (data.error) return dispatch({ type: VOTE_ERROR, payload: data.error });
    dispatch({ type: DOWN_VOTE });
    dispatch({ type: SINGLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: VOTE_ERROR, payload: error.message });
  }
};

export const upVoteAnsAction =
  (postId, answerId, userId) => async (dispatch) => {
    try {
      dispatch({ type: VOTE_REQUEST });

      dispatch({ type: SINGLE_REQUEST });

      const { data } = await axios.post(
        `/api/question/ansVote/up/${postId}`,
        { answerId: answerId, user: userId },
        config
      );

      if (data.error)
        return dispatch({ type: VOTE_ERROR, payload: data.error });
      dispatch({ type: DOWN_VOTE });
      dispatch({ type: SINGLE_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: VOTE_ERROR, payload: error.message });
    }
  };

export const downVoteAnsAction =
  (postId, answerId, userId) => async (dispatch) => {
    try {
      dispatch({ type: VOTE_REQUEST });

      dispatch({ type: SINGLE_REQUEST });

      const { data } = await axios.post(
        `/api/question/ansVote/down/${postId}`,
        { answerId: answerId, user: userId },
        config
      );

      if (data.error)
        return dispatch({ type: VOTE_ERROR, payload: data.error });
      dispatch({ type: DOWN_VOTE });
      dispatch({ type: SINGLE_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: VOTE_ERROR, payload: error.message });
    }
  };

export const UnUpVoteAnsAction = (postId, answerId, userId) => async (dispatch) => {
    try {
      dispatch({ type: VOTE_REQUEST });

      dispatch({ type: SINGLE_REQUEST });

      const { data } = await axios.post(
        `/api/question/ansUnVote/up/${postId}`,
        { answerId: answerId, user: userId },
        config
      );

      if (data.error)
        return dispatch({ type: VOTE_ERROR, payload: data.error });
      dispatch({ type: DOWN_VOTE });
      dispatch({ type: SINGLE_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: VOTE_ERROR, payload: error.message });
    }
  };

  export const UnDownVoteAnsAction = (postId, answerId, userId) => async (dispatch) => {
    try {
      dispatch({ type: VOTE_REQUEST });

      dispatch({ type: SINGLE_REQUEST });

      const { data } = await axios.post(
        `/api/question/ansUnVote/down/${postId}`,
        { answerId: answerId, user: userId },
        config
      );

      if (data.error)
        return dispatch({ type: VOTE_ERROR, payload: data.error });
      dispatch({ type: DOWN_VOTE });
      dispatch({ type: SINGLE_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: VOTE_ERROR, payload: error.message });
    }
  };
