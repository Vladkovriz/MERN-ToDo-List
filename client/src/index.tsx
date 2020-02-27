import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import App from "./App";

import { rootReducer } from "./store/reducers/rootReducer";
import { watchLoadTodo } from "./store/sagas/todo/getTodo";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchLoadTodo);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
