import { Reducer } from "redux";
import {
  GET_TODO,
  ADD_TODO,
  COMPLATE_TODO,
  DELETE_TODO
} from "../actions/todoActions";
import { TodoActionType } from "../actions/actionTypes";
import { ITodo } from "../../interfaces";
export interface State {
  todos: ITodo[];
}

const initialState: State = {
  todos: []
};

export const rootReducer: Reducer<any> = (
  state: State = initialState,
  action: TodoActionType
) => {
  switch (action.type) {
    case GET_TODO:
      return { ...state, todos: action.todos };

    case ADD_TODO:
      return {
        ...state,
        todos: [action.todo, ...state.todos]
      };
    case COMPLATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) =>
          todo._id !== action.id ? todo : action.todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: ITodo) => todo._id !== action.id)
      };
    default:
      return {
        ...state
      };
  }
};
