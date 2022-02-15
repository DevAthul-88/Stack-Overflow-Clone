import {
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
} from "./type";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false,  message: action.payload };
    case USER_REGISTER_ERROR:
      return { loading: false, error: action.payload };
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload, token:action.token , redirect: true };
    case USER_LOGIN_ERROR:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { success: true };
    default:
      return state ;
  }
};

export default authReducer
