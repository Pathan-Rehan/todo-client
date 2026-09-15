import TodoItem from "./TodoItem";

export default function TodoList({todos}){

     return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
        />
      ))}
    </div>
  );
}