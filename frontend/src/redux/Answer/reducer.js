import {
  ANSWER_REQUEST,
  ANSWER_SUCCESS,
  ANSWER_ERROR,
  ANSWER_DELETE,
} from "./type";

const initialState = {};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_REQUEST:
      return { loading: true };
    case ANSWER_SUCCESS:
      return { loading: false };
    case ANSWER_DELETE:
      return { loading: false };
    case ANSWER_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default answerReducer;
