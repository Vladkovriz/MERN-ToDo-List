const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://Vladyslav:qweqweqwe@cluster0-jeryv.mongodb.net/todos";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.get("/todos", (req, res) => {
  Todo.find().then((todo) => res.json(todo));
});

app.post("/todos", async (req, res) => {
  console.log();
  // if (req.body.event === "ADD") {
  //   const todo = new Todo({
  //     title: req.body.title
  //   });

  //   await todo.save();
  //   res.json(todo);
  // } else if (req.body.event === "COMPLATE") {
  //   const todo = await Todo.findById(req.body.id);

  //   todo.completed = !todo.completed;

  //   const updatedTodo = await todo.save();
  //   res.json(updatedTodo);
  // }
  Todo.delete();
  console.log(todos);
});

app.delete("/todos/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

app.listen(PORT, () => {
  console.log(`Server is ranning on ${PORT} port`);
});
