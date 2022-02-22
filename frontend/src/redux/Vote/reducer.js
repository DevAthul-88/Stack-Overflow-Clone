import { VOTE_ERROR, UP_VOTE, VOTE_REQUEST, DOWN_VOTE } from "./type";

const initialState = {};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_REQUEST:
      return { loading: true };
    case UP_VOTE:
      return { loading: false };
    case DOWN_VOTE:
      return { loading: false };
    case VOTE_ERROR:
      return { loading: false };
    default:
      return state;
  }
};

export default voteReducer;
