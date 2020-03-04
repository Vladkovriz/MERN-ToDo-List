import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AddToDo from "./components/AddToDo/index";
import Todos from "./components/Todos/index";

const App: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <AddToDo></AddToDo>
      <Todos></Todos>
    </>
  );
};

export default App;
