export default function TodoItem({title , id , completed, onToggleTodo ,onDeleteTodo}) {

     return (
          <>
               <div className="todo-item">
                    <input type="checkbox" 
                    
                    checked={completed}
                    onChange={()=>onToggleTodo(id)}
                    />

                    <span>{title}</span>

                    <button>Edit</button>
                    <button onClick={() => onDeleteTodo(id)}>Delete</button>
               </div>
          </>
     )
}