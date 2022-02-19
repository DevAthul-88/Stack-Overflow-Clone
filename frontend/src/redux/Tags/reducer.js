import { TAG_REQUEST, TAG_SUCCESS, TAG_ERROR } from "./type";

const initialState = {};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_REQUEST:
      return { loading: true };
    case TAG_SUCCESS:
      return { loading: false, tags: action.payload };
    case TAG_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default tagReducer;
