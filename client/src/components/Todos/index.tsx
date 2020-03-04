import React, { useEffect } from "react";

import { List, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Todo } from "../ToDo/index";
import { ITodo } from "../../interfaces";
import { asyncGetTodo } from "../../store/actions/actions";

type DispatchToProps = {
  todos: ITodo[];
};

const Todos: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetTodo());
  }, []);
  const todos = useSelector((state: any) => state.todos);
  if (todos.length === 0) {
    return (
      <Container maxWidth="sm">
        <p className="center">Пока дел нет!</p>
      </Container>
    );
  }
  console.log(todos);
  return (
    <Container maxWidth="sm">
      <List>
        {todos
          .filter((item: ITodo) => !item.completed)
          .map((todo: ITodo) => (
            <>
              {console.log(todo)}
              <Todo key={todo._id} todo={todo}></Todo>
            </>
          ))}
        {todos
          .filter((item: ITodo) => item.completed)
          .map((todo: ITodo) => (
            <>
              {console.log(todo)}

              <Todo key={todo._id} todo={todo}></Todo>
            </>
          ))}
      </List>
    </Container>
  );
};
export default Todos;
