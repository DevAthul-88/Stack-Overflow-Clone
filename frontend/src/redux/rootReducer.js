import { combineReducers } from "redux";
import { authModalReducer } from "./AuthModal/reducer";

const root = combineReducers({
  authModal: authModalReducer,
});
export default root;
