export default function TodoItem({title}) {

     return (
          <>
               <div className="todo-item">
                    <input type="checkbox" />

                    <span>{title}</span>

                    <button>Edit</button>
                    <button>Delete</button>
               </div>
          </>
     )
}