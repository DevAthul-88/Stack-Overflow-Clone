import {
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
} from "./type";
import axios from "axios";

export const registerAction = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const res = await axios.post("/api/user/create", credentials);
    if (res.data.error)
      return dispatch({ type: USER_REGISTER_ERROR, payload: res.data.error });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: "User successfully created",
    });
  } catch (error) {
    dispatch({ type: USER_REGISTER_ERROR, payload: error.message });
  }
};

export const loginAction = (credentials) => async (dispatch) => {
 try {
   dispatch({type: USER_LOGIN_REQUEST})
   const res = await axios.post("/api/user/login", credentials)
   if(res.data.error) return dispatch({type: USER_LOGIN_ERROR , payload: res.data.error})
   if(res.data.status){
     dispatch({type: USER_LOGIN_SUCCESS , payload: res.data.userObject , token: res.data.token})
   }
 } catch (error) {
   dispatch({type:USER_LOGIN_ERROR , payload: error.message})
 }
}