import {
  QUESTION_REQUEST,
  QUESTION_CREATE,
  QUESTION_EDIT_REQUEST,
  QUESTION_ERROR,
  QUESTION_DELETE,
  QUESTION_EDIT,
} from "./type";

const initialState = {};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_REQUEST:
      return { loading: true };
    case QUESTION_EDIT_REQUEST:
      return { loader: true };
    case QUESTION_CREATE:
      return { loading: false, created: action.payload };
    case QUESTION_EDIT:
      return { loader: false, edited: action.payload };
    case QUESTION_DELETE:
      return { loader: false, deleted: action.payload };
    case QUESTION_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default questionReducer;
