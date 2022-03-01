import {
    PERSONAL_REQUEST,
    PERSONAL_ANS_NEWEST,
    PERSONAL_ANS_OLDEST,
    PERSONAL_QUES_NEWEST,
    PERSONAL_QUES_OLDEST,
    PERSONAL_ERROR
} from './type';

const initialState = {}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
      case PERSONAL_REQUEST:
          return {loading: true}
          break;
  
      default:
          break;
  }
}