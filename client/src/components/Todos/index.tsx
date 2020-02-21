import React, { useEffect } from "react";

import { List, Container } from "@material-ui/core";
import { connect } from "react-redux";

import { Todo } from "../ToDo/index";

import { ITodo } from "../../interfaces";
import {
  GetTodos,
  ComplatedTodo,
  DeletedTodo
} from "../../state/actions/actions";
type TodosProps = {
  todos: ITodo[];
  onGetTodo: () => void;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

const Todos: React.FC<TodosProps> = ({
  todos,
  onGetTodo,
  onToggle,
  onRemove
}) => {
  useEffect(() => {
    onGetTodo();
  }, []);

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
          .filter(item => !item.completed)
          .map((todo: ITodo) => (
            <>
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
          .filter(item => item.completed)
          .map((todo: ITodo) => (
            <>
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
const mapStateToProps = (state: any) => {
  return {
    todos: [...state.todos]
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetTodo: () => dispatch(GetTodos()),
    onToggle: (id: string) => dispatch(ComplatedTodo(id)),
    onRemove: (id: string) => dispatch(DeletedTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
