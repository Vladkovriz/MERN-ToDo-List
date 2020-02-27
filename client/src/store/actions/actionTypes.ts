import { GET_TODO, ADD_TODO, COMPLATE_TODO, DELETE_TODO } from "./todoActions";
import { ITodo } from "../../interfaces";

// export const getTodo = (todos: ITodo[]): TodoActionType => {
//   return { type: GET_TODO, payload: { todos } };
// };

// export const addTodo = (todo: ITodo): TodoActionType => {
//   return { type: ADD_TODO, payload: { todo } };
// };

// export const complateTodo = (todo: ITodo, id: string): TodoActionType => {
//   console.log(id);
//   return {
//     type: COMPLATE_TODO,
//     payload: {
//       id,
//       todo
//     }
//   };
// };

// export const deleteTodo = (id: string): TodoActionType => {
//   return { type: DELETE_TODO, payload: { id } };
// };

export interface TodoActionType {
  type: string;
  payload?: {
    id?: string;
    todo?: ITodo;
    todos?: ITodo[];
  };
}
