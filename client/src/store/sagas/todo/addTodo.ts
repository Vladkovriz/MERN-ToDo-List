import { takeEvery, put, call } from "redux-saga/effects";
import { addTodo } from "../../actions/actions";
import { WATCH_ADD_TODO } from "../../actions/todoActions";

import axios from "axios";

function fetchAddTodo(title: string) {
  return axios.post("/todos", { event: "ADD", title });
}

function* workerAddTodo(action: any) {
  const todos = yield call(fetchAddTodo, action.payload.title);
  yield put(addTodo(todos.data));
}

export function* watchAddTodo() {
  yield takeEvery(WATCH_ADD_TODO, workerAddTodo);
}
