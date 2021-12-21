const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.get('/', todoController.todos_get);
router.get('/:uuid', todoController.todo_get);
router.post('/', todoController.todo_post);
router.put('/:uuid', todoController.todo_update);
router.delete('/:uuid', todoController.todo_delete);

module.exports = router;
