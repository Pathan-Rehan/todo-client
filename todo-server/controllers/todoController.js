import Todo from '../models/Todo.js';
// This file contains the four CRUD API'S 
// get all todos 
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch todos',
    });
  }
};

// Create a new todo 
export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        error: 'Title is required',
      });
    }

    const todo = await Todo.create({
      title: title.trim(),
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to create todo',
    });
  }
};

// Update a todo by ID 
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true, runValidators: true }
    );

    if (!todo) {
      return res.status(404).json({
        error: 'Todo not found',
      });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to update todo',
    });
  }
};

// Delete a todo by ID 
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        error: 'Todo not found',
      });
    }

    res.status(200).json({
      message: 'Todo deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to delete todo',
    });
  }
};