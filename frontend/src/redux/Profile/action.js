import {
  PROFILE_SUCCESS,
  PROFILE_REQUEST,
  PROFILE_ERROR,
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT,
  PROFILE_EDIT_ERROR
} from "./type";
import axios from "axios";
import config from "../../Config/header";

export const profileAction = (id) => async (dispatch) => {
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

export const editAction = (id , credentials) => async (dispatch) =>  {
  try {
    dispatch({type:PROFILE_EDIT_REQUEST})
    const {data}  = await axios.put(`/api/user/user/${id}` , credentials , config)
    if(data.error) return dispatch({type:PROFILE_EDIT_ERROR  , payload: data.error})
    dispatch({ type:PROFILE_EDIT , payload:data.data , edited:data.edited})
   } catch (error) {
    dispatch({ type:PROFILE_EDIT_ERROR , payload: error.message})
  }
}
