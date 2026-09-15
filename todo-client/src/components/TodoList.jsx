import TodoItem from "./TodoItem";

export default function TodoList(){

     return (
    <div className="todo-list">
      <TodoItem title="Learn Node.js" />
      <TodoItem title="Build Todo API" />
      <TodoItem title="Complete calculator project" />
    </div>
  );
}