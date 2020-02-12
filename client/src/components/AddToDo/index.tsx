import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button, Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

interface AddTodoProps {
  onAdd: (title: string) => void;
}

export const AddToDo: React.FC<AddTodoProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const classes = useStyles();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
    }
  };

  const handleAddTodo = (event: React.MouseEvent) => {
    props.onAdd(title);
  };

  return (
    <Container maxWidth="sm">
      <TextField
        id="outlined-full-width"
        label="Add to do"
        placeholder="Placeholder"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Primary
      </Button>
    </Container>
  );
};
