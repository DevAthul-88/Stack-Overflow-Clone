import {
  PROFILE_SUCCESS,
  PROFILE_REQUEST,
  PROFILE_ERROR,
  PROFILE_EDIT_REQUEST,
  PROFILE_EDIT,
  PROFILE_EDIT_ERROR,
} from "./type";

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { loading: true };
    case PROFILE_EDIT_REQUEST:
      return { loadings: true };
    case PROFILE_SUCCESS:
      return { loading: false, profile: action.payload };
    case PROFILE_EDIT:
      return { loadings: false, user: action.payload, edited: action.edited };
    case PROFILE_ERROR:
      return { loading: false, error: action.payload };
    case PROFILE_EDIT_ERROR:
      return { loadings: false, error: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
