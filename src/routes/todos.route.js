const { Router } = require("express");
const { addHandler, fetchAllHandler } = require("../controllers/todos.controller.handler");

const todosRouter = Router();

todosRouter.post("/", addHandler)
todosRouter.get("/", fetchAllHandler)

module.exports = todosRouter