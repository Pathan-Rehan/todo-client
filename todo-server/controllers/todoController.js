import Todo from '../models/Todo.js';

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