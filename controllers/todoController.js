const { v4: uuidv4 } = require('uuid');

let todos = [];

const generateId = () => {
    return uuidv4();
};

// Create a new todo
const createTodo = (req, res) => {
    const {title, priority} = req.params;
    if (!title || !priority) {
        return res.status(400).json({error: 'Title and priority are required'});
    }
    const id = generateId();
    const createdAt = new Date();
    const newTodo = {
        id,
        title,
        priority,
        createdAt,
        done: false,
        doneAt: null
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

// Read all todos
const getAllTodos = (req, res) => {
    res.json(todos);
};

//Read a single todo by ID
const getTodoById = (req, res) => {
    const todoId = req.params.id;
    const todo = todos.find(todo => todo.id === todoId);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
};

// Update a todo
const updateTodo = (req, res) => {
    const todoId = req.params.id;
    const updates = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
      todos[todoIndex] = {
        ...todos[todoIndex],
        ...updates
      };
      res.json(todos[todoIndex]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  };
  
  // Delete a todo
  const deleteTodo = (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
      const deletedTodo = todos.splice(todoIndex, 1);
      res.json(deletedTodo[0]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  };

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};
