import { takeEvery, put, call } from "redux-saga/effects";
import { putTodo } from "../../actions/actions";
import { GET_TODO } from "../../actions/todoActions";

import axios from "axios";

function fetchTodo() {
  return axios.get("/todos");
}

function* workerLoadTodo() {
  const todos = yield call(fetchTodo);
  yield put(putTodo(todos.data));
}

export function* watchLoadTodo() {
  yield takeEvery(GET_TODO, workerLoadTodo);
}
