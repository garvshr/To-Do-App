const express = require('express');

const router = express.Router();
const { getTodos, createTodo, updateTodos, deleteTodo} = require('../controllers/todo.controller');
const { validateTodo } = require('../middleware/validateTodo.middleware');
const { auth } = require('../middleware/auth.middleware');

router.get('/', auth, getTodos);
router.post('/', auth, validateTodo, createTodo);
router.put('/:id', auth, updateTodos);
router.delete('/:id', auth, deleteTodo);

module.exports = router;