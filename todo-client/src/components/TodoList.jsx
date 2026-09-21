import TodoItem from "./TodoItem";

export default function TodoList({todos, onToggleTodo ,onDeleteTodo}){

     return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggleTodo={onToggleTodo}
          id={todo.id}
           onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}