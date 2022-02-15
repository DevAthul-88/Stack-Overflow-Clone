import { PROFILE_SUCCESS, PROFILE_REQUEST, PROFILE_ERROR } from "./type";
import axios from "axios";

const profileAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_REQUEST });

    const { data } = await axios.get(`/api/user/user/${id}`);

    if (data.error)
      return dispatch({ type: PROFILE_ERROR, payload: data.error });

    dispatch({ type: PROFILE_SUCCESS, payload: data.userData });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR, payload: error.message });
  }
};

export default profileAction;
