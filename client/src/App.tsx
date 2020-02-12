import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { AddToDo } from "./components/AddToDo/index";
import { Todos } from "./components/Todos/index";

import { withTodo } from "./hocs/TodoContext";

import { ITodo } from "./interfaces";

type AppProps = {
  todos: ITodo[];
  addHandler: (title: string) => void;
  removeHandler: (id: string) => void;
  toggleHandler: (id: string) => void;
};

const App: React.FC<AppProps> = ({
  todos,
  addHandler,
  removeHandler,
  toggleHandler
}) => {
  return (
    <>
      <Navbar></Navbar>
      <AddToDo onAdd={addHandler}></AddToDo>
      <Todos
        onToggle={toggleHandler}
        onRemove={removeHandler}
        todos={todos}
      ></Todos>
    </>
  );
};

export default withTodo(App);
