import { TAG_POST_REQUEST, TAG_POST_SUCCESS, TAG_POST_ERROR } from "./type";

const initialState = {};

const tagPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_POST_REQUEST:
      return { loading: true };
    case TAG_POST_SUCCESS:
      return { loading: false, data: action.payload };
    case TAG_POST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default tagPostReducer;
