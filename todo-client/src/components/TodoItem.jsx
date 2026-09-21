import {useState} from "react";

export default function TodoItem({ title, id, completed, onToggleTodo, onDeleteTodo, onEditTodo, editingId, onSaveTodo }) {
     const isEditing = editingId === id;
     const [editTitle, setEditTitle] = useState(title);
     return (
          <>
               <div className="todo-item">
                    <input type="checkbox"

                         checked={completed}
                         onChange={() => onToggleTodo(id)}
                    />

                    {isEditing ? (
                         <input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                         />
                    ) : (
                         <span>{title}</span>
                    )}

                    {isEditing ? (
                         <button onClick={() => onSaveTodo(id, editTitle)}>
                              Save
                         </button>
                    ) : (
                         <button onClick={() => onEditTodo(id)}>
                              Edit
                         </button>
                    )}                    <button onClick={() => onDeleteTodo(id)}>Delete</button>
               </div>
          </>
     )
}