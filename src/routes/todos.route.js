const { Router } = require("express");
const { addHandler, fetchOneHandler, fetchAllHandler } = require("../controllers/todos.controller.handler");

const todosRouter = Router();

todosRouter.post("/", addHandler)
todosRouter.get("/:id", fetchOneHandler)
todosRouter.get("/", fetchAllHandler)

module.exports = todosRouter