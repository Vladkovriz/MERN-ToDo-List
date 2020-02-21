import { GET_TODO, ADD_TODO, COMPLATE_TODO, DELETE_TODO } from "./todoActions";
import { ITodo } from "../../interfaces";

export const getTodo = (todos: ITodo[]): TodoActionType => {
  return { type: GET_TODO, todos };
};

export const addTodo = (todo: ITodo): TodoActionType => {
  return { type: ADD_TODO, todo };
};

export const complateTodo = (id: string, todo: ITodo): TodoActionType => {
  return { type: COMPLATE_TODO, id, todo };
};

export const deleteTodo = (id: string): TodoActionType => {
  return { type: DELETE_TODO, id };
};

export interface TodoActionType {
  type: string;
  id?: string;
  title?: string;
  todo?: ITodo;
  todos?: ITodo[];
}
