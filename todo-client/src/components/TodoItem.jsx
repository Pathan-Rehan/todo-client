export default function TodoItem({title , id , completed, onToggleTodo}) {

     return (
          <>
               <div className="todo-item">
                    <input type="checkbox" 
                    
                    checked={completed}
                    onChange={()=>onToggleTodo(id)}
                    />

                    <span>{title}</span>

                    <button>Edit</button>
                    <button>Delete</button>
               </div>
          </>
     )
}