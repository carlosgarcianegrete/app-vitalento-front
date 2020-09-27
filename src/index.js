import React from "react";
import ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "../src/reducers";
import thunk from "redux-thunk";


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);