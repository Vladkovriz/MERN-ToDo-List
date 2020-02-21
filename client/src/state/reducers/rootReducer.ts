import { Reducer } from "redux";
import {
  GET_TODO,
  ADD_TODO,
  COMPLATE_TODO,
  DELETE_TODO
} from "../actions/actionTypes";

import { ITodo } from "../../interfaces";
interface State {
  todos: ITodo[];
}

const initialState: State = {
  todos: []
};

export const rootReducer: Reducer<any> = (
  state: State = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_TODO:
      return { ...state, todos: action.payload };

    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case COMPLATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) =>
          todo._id !== action.payload ? todo : action.response.data
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: ITodo) => todo._id !== action.payload)
      };
    default:
      return {
        ...state
      };
  }
};
