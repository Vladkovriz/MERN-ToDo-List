import { takeEvery, put, call } from "redux-saga/effects";
import { complateTodo } from "../../actions/actions";
import { WATCH_COMPLATE_TODO } from "../../actions/todoActions";

import axios from "axios";

function fetchComplateTodo(id: string) {
  return axios.post("/todos", {
    event: "COMPLATE",
    id
  });
}

function* workerComplateTodo(action: any) {
  console.log(action);
  const todos = yield call(fetchComplateTodo, action.payload);

  console.log("action", todos);
  yield put(complateTodo(action.payload));
}

export function* watchComplateTodo() {
  yield takeEvery(WATCH_COMPLATE_TODO, workerComplateTodo);
}
