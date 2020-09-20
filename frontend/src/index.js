import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import { Provider } from "react-redux";
import "./index.scss";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
