import { takeEvery, put, call } from "redux-saga/effects";
import { getTodo } from "../../actions/actions";
import { WATCH_GET_TODO } from "../../actions/todoActions";

import axios from "axios";

function fetchTodo() {
  return axios.get("/todos");
}

function* workerLoadTodo() {
  const todos = yield call(fetchTodo);
  yield put(getTodo(todos.data));
}

export function* watchLoadTodo() {
  yield takeEvery(WATCH_GET_TODO, workerLoadTodo);
}
