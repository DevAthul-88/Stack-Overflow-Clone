import { combineReducers } from "redux";
import { authModalReducer } from "./AuthModal/reducer";
import authReducer from "./Auth/reducer";
import { usersReducer } from "./Users/reducer";
import ProfileReducer from "./Profile/reducer";

const root = combineReducers({
  authModal: authModalReducer,
  auth: authReducer,
  users: usersReducer,
  profile: ProfileReducer,
});
export default root;
