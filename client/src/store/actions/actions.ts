import {
  GET_TODO,
  WATCH_GET_TODO,
  ADD_TODO,
  WATCH_ADD_TODO,
  COMPLATE_TODO,
  WATCH_COMPLATE_TODO,
  DELETE_TODO,
  WATCH_DELETE_TODO
} from "./todoActions";
import { ITodo } from "../../interfaces";

// GET_TODO
export const getTodo = (todos: ITodo[]): any => {
  return {
    type: GET_TODO,
    payload: todos
  };
};

export const asyncGetTodo = () => {
  return {
    type: WATCH_GET_TODO
  };
};

// ADD_TODO
export const addTodo = (todo: ITodo): any => {
  return { type: ADD_TODO, payload: todo };
};
export const asyncAddTodo = (title: string): any => {
  return { type: WATCH_ADD_TODO, payload: { title } };
};

//COMPLATE_TODO
export const complateTodo = (id: string): any => {
  return {
    type: COMPLATE_TODO,
    payload: id
  };
};

export const asyncComplateTodo = (id: string | undefined) => {
  return {
    type: WATCH_COMPLATE_TODO,
    payload: id
  };
};

// export const ComplatedTodo = (id: string) => {
//   // return async (dispatch: any) => {
//   //   const res = await axios.post("/todos", {
//   //     event: "COMPLATE",
//   //     id: id
//   //   });
//   //   console.log(res.data);
//   //   dispatch(complateTodo(res.data, id));
//   // };
// };

// export const DeletedTodo = (id: string) => {
//   // return async (dispatch: any) => {
//   //   const res = await axios.delete(`/todos/${id}`);
//   //   dispatch(deleteTodo(id));
//   // };
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
// COMPLATE
