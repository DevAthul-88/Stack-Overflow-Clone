import {
  USER_ERROR,
  USER_REQUEST,
  ALL_USERS,
  SINGLE_USER,
  SEARCH_USER,
} from "./type";

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case ALL_USERS:
      return { loading: false, allUsers: action.payload };
    case SEARCH_USER:
      return { loading: false, allUsers: action.payload };
    case SINGLE_USER:
      return { loading: false, userOne: action.payload };
    case USER_ERROR:
      return { loading: false, error: action.payload };
    default:
      return { state };
  }
};
