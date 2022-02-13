import { combineReducers } from "redux";
import { authModalReducer } from "./AuthModal/reducer";
import authReducer from "./Auth/reducer"

const root = combineReducers({
  authModal: authModalReducer,
  auth:authReducer,

});
export default root;
