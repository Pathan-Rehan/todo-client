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
  console.log(todos);

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
  const handleToggleTodo = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};

const handleDeleteTodo = (id) => {
  setTodos((prevTodos) =>
    prevTodos.filter((todo) => todo.id !== id)
  );
};
  return (
    <main className="todo-container">
      <h1>Todo App</h1>

      <TodoForm input={input} setInput={setInput} onAddTodo={handleAddTodo}/>
      <TodoList todos={todos} onToggleTodo={handleToggleTodo}   onDeleteTodo={handleDeleteTodo} />
    </main>
  );
}

export default App;