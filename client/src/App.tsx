import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AddToDo from "./components/AddToDo/index";
import Todos from "./components/Todos/index";

import { connect } from "react-redux";

import { ITodo } from "./interfaces";

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
