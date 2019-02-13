import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//create storage
import { createStore, applyMiddleware } from "redux";
//so that react can interact with the storage ( create  a bigger compoent that includes our main component App)
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
//react does everything at the same time thunk is used to do it asynchronosly
import thunk from "redux-thunk";
//adding redux devtools (make sure you add the extension in the frontend json package not in the backend)
import { composeWithDevTools } from "redux-devtools-extension";

//provider is a component that wraps arround the main component i.e. App component

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
