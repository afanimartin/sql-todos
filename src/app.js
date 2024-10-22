const express = require("express");
const bodyParser = require("body-parser");

const todosRouter = require("./routes/todos.route");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello, world!" });
});

app.use("/api/v1/todos", todosRouter);

module.exports = app;
