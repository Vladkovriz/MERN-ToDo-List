import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { List, Container } from "@material-ui/core";

import { Todo } from "../ToDo/index";

import { ITodo } from "../../interfaces";

type TodosProps = {
  todos: ITodo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export const Todos: React.FC<TodosProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return (
      <Container maxWidth="sm">
        <p className="center">Пока дел нет!</p>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <List>
        {todos
          .filter((item) => !item.completed)
          .map((todo: ITodo) => (
            <>
              {console.log(todo.completed)}
              <Todo
                completed={todo.completed}
                key={todo._id}
                title={todo.title}
                id={todo._id}
                onToggle={onToggle}
                onRemove={onRemove}
              ></Todo>
            </>
          ))}
        {todos
          .filter((item) => item.completed)
          .map((todo: ITodo) => (
            <>
              {console.log(todo.completed)}
              <Todo
                completed={todo.completed}
                key={todo._id}
                title={todo.title}
                id={todo._id}
                onToggle={onToggle}
                onRemove={onRemove}
              ></Todo>
            </>
          ))}
      </List>
    </Container>
  );
};
