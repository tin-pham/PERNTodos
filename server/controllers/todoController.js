const { Todo } = require('../models');

const todos_get = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const todo_get = async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const todo = await Todo.findOne({ where: { uuid } });

    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const todo_post = async (req, res) => {
  const { name, is_done } = req.body;
  try {
    const todo = await Todo.create({ name, is_done });
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const todo_update = async (req, res) => {
  const uuid = req.params.uuid;
  const { name, is_done } = req.body;
  console.log(uuid);
  try {
    const todo = await Todo.findOne({ where: { uuid } });

    todo.name = name;
    todo.is_done = is_done;

    await todo.save();

    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const todo_delete = async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const todo = await Todo.findOne({ where: { uuid } });

    await todo.destroy();

    res.json({ message: 'Delete successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  todos_get,
  todo_get,
  todo_post,
  todo_update,
  todo_delete,
};
