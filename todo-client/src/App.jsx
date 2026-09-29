import { useState , useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import { getTodos } from './service/api';

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
  const handleEditTodo = (id) => {
    setEditingId(id);
  };
  const handleSaveTodo = (id, newTitle) => {
    if (!newTitle.trim()) {
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle }
          : todo
      )
    );

    setEditingId(null);
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