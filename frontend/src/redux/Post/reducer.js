import {
  QUES_FEATURED,
  QUES_NEWEST,
  QUES_REQUEST,
  QUES_ERROR,
  QUES_INTERESTING,
  QUES_UNANSWERED,
} from "./type";

const initialState = {};

const quesReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUES_REQUEST:
      return { loading: true };
    case QUES_NEWEST:
      return { loading: false, data: action.payload };
    case QUES_FEATURED:
      return { loading: false, data: action.payload };
    case QUES_INTERESTING:
      return { loading: false, data: action.payload };
    case QUES_INTERESTING:
      return { loading: false, data: action.payload };
    case QUES_UNANSWERED:
      return { loading: false, data: action.payload };
    case QUES_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quesReducer