import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AddToDo from "./components/AddToDo/index";
import Todos from "./components/Todos/index";
import { useDispatch } from "react-redux";

import { loadTodo } from "./store/actions/actions";
const App: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(loadTodo());
  return (
    <>
      <div className="App">
        <button onClick={onClick}>Click me</button>
      </div>
      <Navbar></Navbar>
      <AddToDo></AddToDo>
      <Todos></Todos>
    </>
  );
};

export default App;
