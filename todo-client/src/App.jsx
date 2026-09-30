import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import { getTodos, createTodo, updateTodo, deleteTodo } from './service/api';

function App() {
  const [todos, setTodos] = useState([]);
  // load todos from the get api  ( useEffect is used ) 
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodos();
  }, []);


  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  // handle Add todo function (add todo to the list and clear the input field )
  const handleAddTodo = async () => {
    if (!input.trim()) {
      return;
    }

    try {
      const newTodo = await createTodo(input);

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInput('');
    } catch (error) {
      console.error(error);
    }
  };
  const handleToggleTodo = async (id) => {
    const todo = todos.find((todo) => todo._id === id);

    if (!todo) {
      return;
    }

    try {
      const updatedTodo = await updateTodo(id, {
        completed: !todo.completed,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? updatedTodo : todo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);

      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleEditTodo = (id) => {
    setEditingId(id);
  };
  const handleSaveTodo = async (id, newTitle) => {
    if (!newTitle.trim()) {
      return;
    }

    try {
      const updatedTodo = await updateTodo(id, {
        title: newTitle.trim(),
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? updatedTodo : todo
        )
      );

      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="todo-container">
      <h1>Todo App</h1>

      <TodoForm input={input} setInput={setInput} onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} editingId={editingId} onSaveTodo={handleSaveTodo}
      />
    </main>
  );
}

export default App;