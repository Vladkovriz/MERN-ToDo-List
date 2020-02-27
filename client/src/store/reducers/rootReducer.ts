import { Reducer } from "redux";

import {
  GET_TODO,
  ADD_TODO,
  COMPLATE_TODO,
  DELETE_TODO,
  PUT_TODO
} from "../actions/todoActions";
import { TodoActionType } from "../actions/actionTypes";
import { ITodo } from "../../interfaces";
export interface State {
  todos: ITodo[];
}

const initialState = {
  todos: []
};
// const initialState = {
//   data: {}
// };
export const rootReducer = (state: State = initialState, action: any): any => {
  console.log(action.payload);
  switch (action.type) {
    case PUT_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case COMPLATE_TODO:
      console.log(action.payload);
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) =>
          todo._id !== action.payload.id
            ? todo
            : (todo.completed = !todo.completed)
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: ITodo) => todo._id !== action.payload.id
        )
      };
    default:
      return {
        ...state
      };
  }
};
