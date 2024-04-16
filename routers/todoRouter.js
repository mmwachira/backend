const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

// Create a new todo
router.post('/:title/:priority', todoController.createTodo);

// Get all todos
router.get('/', todoController.getAllTodos);

// Get todo by ID
router.get('/:id',todoController.getTodoById );

// Update todo
router.put('/:id', todoController.updateTodo);

// Delete todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;