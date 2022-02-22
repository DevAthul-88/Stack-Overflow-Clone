import { COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_ERROR , COMMENT_DELETE } from "./type";

const initialState = {};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return { loading: true };
    case COMMENT_SUCCESS:
      return { loading: false };
      case COMMENT_DELETE:
        return { loading: false };
    case COMMENT_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default commentReducer;
