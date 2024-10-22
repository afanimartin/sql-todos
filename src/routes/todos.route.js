const { Router } = require("express");
const { addHandler, fetchHandler } = require("../controllers/todos.controller.handler");

const todosRouter = Router();

todosRouter.post("/", addHandler)
todosRouter.get("/", fetchHandler)

module.exports = todosRouter