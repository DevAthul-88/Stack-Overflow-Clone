import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_ERROR } from "./type";

const initialState = {};
const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_REQUEST:
      return { loading: true };
    case SINGLE_SUCCESS:
      return { loading: false, data: action.payload };
    case SINGLE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default singleReducer;