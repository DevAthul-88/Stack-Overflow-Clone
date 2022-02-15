import { PROFILE_SUCCESS, PROFILE_REQUEST, PROFILE_ERROR } from "./type";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { loading: true };
    case PROFILE_SUCCESS:
      return { loading: false, profile: action.payload };
    case PROFILE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
