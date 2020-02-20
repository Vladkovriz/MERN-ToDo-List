import React, { useState } from "react";

import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

interface ToDoProps {
  title: string;
  id: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export const Todo: React.FC<ToDoProps> = ({
  title,
  id,
  completed,
  onToggle,
  onRemove
}) => {
  const removeHandler = (id: string) => {
    console.log("id", id);
    onRemove(id);
  };
  const toggleHandler = (id: string) => {
    onToggle(id);
  };

  return (
    <ListItem>
      <IconButton
        edge="end"
        aria-label="delete"
        color="secondary"
        onClick={(event) => removeHandler(id)}
      >
        <DeleteIcon />
      </IconButton>

      <ListItemText
        primary={title}
        style={completed ? { textDecoration: "line-through" } : {}}
      />
      <Checkbox
        checked={completed}
        value="secondary"
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        onChange={(event) => toggleHandler(id)}
      />
    </ListItem>
  );
};
