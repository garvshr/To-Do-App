const express = require('express');

const router = express.Router();
const { getTodos, createTodo, updateTodos, deleteTodo} = require('../controllers/todo.controller');


router.get('/', getTodos);
router.post('/create', createTodo);
router.put('/update/:id', updateTodos);
router.delete('/delete/:id', deleteTodo);

module.exports = router;