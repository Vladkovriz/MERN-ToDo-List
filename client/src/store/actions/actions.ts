// import { getTodo, addTodo, complateTodo, deleteTodo } from "./actionTypes";
import { GET_TODO, PUT_TODO } from "./todoActions";
import { ITodo } from "../../interfaces";
import axios from "axios";
// export const GetTodos = () => {
//   // return async (dispatch: any) => {
//   //   const res = await axios.get("/todos");
//   //   dispatch(getTodo(res.data));
//   // };
// };

// export const AddTodo = (title: string) => {
//   // return async (dispatch: any) => {
//   //   const res = await axios.post("/todos", { event: "ADD", title });
//   //   dispatch(addTodo(res.data));
//   // };
// };

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

export const putTodo = (todos: any): any => {
  return {
    type: PUT_TODO,
    payload: todos
  };
};

export const loadTodo = () => {
  return {
    type: GET_TODO
  };
};
