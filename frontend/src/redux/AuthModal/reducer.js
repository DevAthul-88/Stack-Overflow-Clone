import { SET_CURRENT_STATE, TOGGLE_AUTH_MODAL } from "./type";

const initialState = { state: "", bool: false };

export const authModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STATE:
      return { state: action.state, bool: action.bool };
    case TOGGLE_AUTH_MODAL:
      return { bool: action.bool };
    default:
      return state;
  }
};
