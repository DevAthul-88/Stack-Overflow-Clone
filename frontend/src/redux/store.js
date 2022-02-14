import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./rootReducer";

const data = localStorage.getItem("user_stack")
  ? JSON.parse(localStorage.getItem("user_stack"))
  : {};

const initialState = {
  auth: { userInfo: data },
};

const middleware = [thunk];
const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
