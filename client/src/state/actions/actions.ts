import { getTodo, addTodo, complateTodo, deleteTodo } from "./actionTypes";
import { ITodo } from "../../interfaces";
import axios from "axios";

export const GetTodos = () => {
  return async (dispatch: any) => {
    const res = await axios.get("/todos");
    dispatch(getTodo(res.data));
  };
};

export const AddTodo = (title: string) => {
  return async (dispatch: any) => {
    const res = await axios.post("/todos", { event: "ADD", title });
    dispatch(addTodo(res.data));
  };
};

export const ComplatedTodo = (id: string) => {
  return async (dispatch: any) => {
    const res = await axios.post("/todos", {
      event: "COMPLATE",
      id: id
    });
    dispatch(complateTodo(id, res.data));
  };
};

export const DeletedTodo = (id: string) => {
  return async (dispatch: any) => {
    const res = await axios.delete(`/todos/${id}`);
    dispatch(deleteTodo(id));
  };
};
