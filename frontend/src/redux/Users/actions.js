import { USER_ERROR, USER_REQUEST, ALL_USERS, SINGLE_USER } from "./type";
import axios from "axios";

export const usersAction = () => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const { data } = await axios.get("/api/user/allUsers");
    if (data.error) return dispatch({ type: USER_ERROR, payload: data.error });
    dispatch({ type: ALL_USERS, payload: data.users });
  } catch (error) {
    dispatch({ type: USER_ERROR, payload: error.message });
  }
};
