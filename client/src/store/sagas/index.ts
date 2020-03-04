import { all } from "redux-saga/effects";

import { watchAddTodo } from "./todo/addTodo";
import { watchLoadTodo } from "./todo/getTodo";
import { watchComplateTodo } from "./todo/complateTodo";

export default function* rootSaga() {
  yield all([watchAddTodo(), watchLoadTodo(), watchComplateTodo()]);
}
