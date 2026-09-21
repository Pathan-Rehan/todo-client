import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn Node.js',
      completed: false,
    },
    {
      id: 2,
      title: 'Build Todo API',
      completed: false,
    },
    {
      id: 3,
      title: 'Complete calculator project',
      completed: true,
    },
  ]





  );

  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (!input.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    setInput('');
  };
  return (
    <main className="todo-container">
      <h1>Todo App</h1>

      <TodoForm input={input} setInput={setInput} onAddTodo={handleAddTodo}/>
      <TodoList todos={todos} />
    </main>
  );
}

export default App;