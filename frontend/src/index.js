import React from "react";
import ReactDOM from "react-dom";
import "./bulma.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
