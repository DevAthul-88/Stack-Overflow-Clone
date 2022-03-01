import {
  PERSONAL_REQUEST,
  PERSONAL_ANS_NEWEST,
  PERSONAL_ANS_OLDEST,
  PERSONAL_QUES_NEWEST,
  PERSONAL_QUES_OLDEST,
  PERSONAL_ERROR,
} from "./type";

const initialState = {};

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_REQUEST:
      return { loading: true };
    case PERSONAL_ANS_NEWEST:
      return { loading: false, data: action.payload };
    case PERSONAL_ANS_OLDEST:
      return { loading: false, data: action.payload };
    case PERSONAL_QUES_NEWEST:
      return { loading: false, data: action.payload };
    case PERSONAL_QUES_OLDEST:
      return { loading: false, data: action.payload };
    case PERSONAL_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default personalReducer;
