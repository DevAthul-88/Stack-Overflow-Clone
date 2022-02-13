import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./rootReducer";

const middleware = [thunk];

const user= localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = { };

const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
