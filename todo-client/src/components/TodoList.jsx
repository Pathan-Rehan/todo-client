import TodoItem from "./TodoItem";

export default function TodoList({todos, onToggleTodo ,onDeleteTodo,onEditTodo,editingId, onSaveTodo}){

     return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          title={todo.title}
          completed={todo.completed}
          onToggleTodo={onToggleTodo}
          id={todo._id}
           onDeleteTodo={onDeleteTodo}
           onEditTodo={onEditTodo}
           editingId={editingId}
             onSaveTodo={onSaveTodo}

        />
      ))}
    </div>
  );
}