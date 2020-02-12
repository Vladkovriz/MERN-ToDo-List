import React, { useEffect, useState } from "react";
import { ITodo } from "../interfaces";
import axios from "axios";

interface WithTodoProps {
  todos: ITodo[];
  addHandler: (title: string) => void;
  removeHandler: (id: string) => void;
  toggleHandler: (id: string) => void;
}

export let withTodo = (WrappedComponent: React.FC<WithTodoProps>) => {
  const TodoContext = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      axios.get("/todos").then((res) => {
        setTodos(res.data);
      });
    }, []);

    const addHandler = (title: string) => {
      axios.post("/todos", { event: "ADD", title: title }).then((res: any) => {
        setTodos((prev) => [res.data, ...prev]);
      });
    };

    const removeHandler = (id: string) => {
      axios.delete(`/todos/${id}`).then((res: any) => {
        setTodos((prev) => prev.filter((todo: ITodo) => todo._id !== id));
      });
    };

    const toggleHandler = (id: string) => {
      axios.post("/todos", { event: "COMPLATE", id: id }).then((res: any) => {
        setTodos((prev) =>
          prev.map((todo: ITodo) => (todo._id !== id ? todo : res.data))
        );
      });
      // setTodos((prev) =>
      //   prev.map((item: ITodo) => {
      //     if (item._id === id) {
      //       item.completed = !item.completed;
      //     }
      //     return item;
      //   })
      // );
    };
    return (
      <WrappedComponent
        todos={todos}
        addHandler={addHandler}
        removeHandler={removeHandler}
        toggleHandler={toggleHandler}
      />
    );
  };
  return TodoContext;
};
