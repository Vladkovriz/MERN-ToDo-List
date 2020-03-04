import React, { useState } from "react";

import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

import { ITodo } from "../../interfaces";

import { asyncComplateTodo } from "../../store/actions/actions";
import { useDispatch } from "react-redux";
type ToDoProps = {
  todo: ITodo;
};

export const Todo: React.FC<ToDoProps> = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  
  // const removeHandler = (id: string) => {
  //   asyncComplateTodo(id);
  // };

  const toggleHandler = (id: string | undefined): void => {
    dispatch(asyncComplateTodo(id));
  };

  return (
    <ListItem>
      <IconButton
        edge="end"
        aria-label="delete"
        color="secondary"
        // onClick={(event) => removeHandler(id)}
      >
        <DeleteIcon />
      </IconButton>

      <ListItemText
        primary={todo.title}
        style={todo.completed ? { textDecoration: "line-through" } : {}}
      />
      <Checkbox
        checked={todo.completed}
        value="secondary"
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        onChange={() => toggleHandler(todo._id)}
      />
    </ListItem>
  );
};
