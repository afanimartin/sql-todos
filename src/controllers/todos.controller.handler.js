const { add, fetchAll } = require("./todos.controller");

const addHandler = async (req, res) => {
  try {
    const response = await add(req.body.content);
    return res.status(201).json(response);
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};

const fetchAllHandler = async (req, res) => {
  try {
    const todos = await fetchAll();
    if (!todos) return res.status(500).json({ error: "could not fetch todos" });
    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos: ", error);
  }
};

module.exports = { addHandler, fetchAllHandler };
