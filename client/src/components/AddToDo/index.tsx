import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button, Container } from "@material-ui/core";

import { asyncAddTodo } from "../../store/actions/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

type AddTodoProps = {
  // onAdd: (title: string) => void;
};

const AddToDo: React.FC<AddTodoProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const dispatch = useDispatch();

  const classes = useStyles();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch(asyncAddTodo(title));
    }
  };

  const handleAddTodo = (event: React.MouseEvent) => {
    dispatch(asyncAddTodo(title));
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

export default AddToDo;
