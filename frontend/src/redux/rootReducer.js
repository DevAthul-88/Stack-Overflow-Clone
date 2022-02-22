import { combineReducers } from "redux";
import { authModalReducer } from "./AuthModal/reducer";
import authReducer from "./Auth/reducer";
import { usersReducer } from "./Users/reducer";
import ProfileReducer from "./Profile/reducer";
import questionReducer from "./Question/reducer";
import tagReducer from "./Tags/reducer";
import postReducer from "./Post/reducer";
import singleReducer from "./Single/reducer";
import commentReducer from "./Comment/reducer";
import voteReducer from "./Vote/reducer";
import answerReducer from "./Answer/reducer";

const root = combineReducers({
  authModal: authModalReducer,
  auth: authReducer,
  users: usersReducer,
  profile: ProfileReducer,
  question: questionReducer,
  tag: tagReducer,
  post: postReducer,
  single: singleReducer,
  comment: commentReducer,
  vote: voteReducer,
  answer: answerReducer,
});
export default root;
