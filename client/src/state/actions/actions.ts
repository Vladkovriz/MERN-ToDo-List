import { GET_TODO, ADD_TODO, COMPLATE_TODO, DELETE_TODO } from "./actionTypes";
import { ITodo } from "../../interfaces";
import axios from "axios";

export const GetTodos = () => {
  return async (dispatch: any) => {
    const res = await axios.get("/todos");
    console.log(res);
    dispatch(getTodo(res.data));
  };
};

export const getTodo = (todos: ITodo[]) => {
  return { type: GET_TODO, payload: todos };
};

export const AddTodo = (title: string) => {
  console.log("title", title);
  return async (dispatch: any) => {
    const res = await axios.post("/todos", { event: "ADD", title });
    console.log(res);
    dispatch(addTodo(res.data));
  };
};

export const addTodo = (res: ITodo) => {
  return { type: ADD_TODO, payload: res };
};

export const ComplatedTodo = (id: string) => {
  return async (dispatch: any) => {
    const res = await axios.post("/todos", {
      event: "COMPLATE",
      id: id
    });
    dispatch(complateTodo(id, res));
  };
};

export const complateTodo = (id: string, res: any) => {
  return { type: COMPLATE_TODO, payload: id, response: res };
};

export const DeletedTodo = (id: string) => {
  return async (dispatch: any) => {
    const res = await axios.delete(`/todos/${id}`);
    console.log("res", res);

    dispatch(deleteTodo(id));
  };
};

export const deleteTodo = (id: string) => {
  return { type: DELETE_TODO, payload: id };
};
