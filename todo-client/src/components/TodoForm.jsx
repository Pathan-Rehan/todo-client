export default function TodoForm({input,setInput}) {

     return (
          <>
               <div className="todo-form">
                    <input
                         type="text"
                         placeholder="Enter a task..."
                         value={input}
                         onChange={(e)=>setInput(e.target.value)}
                    />

                    <button>Add</button>
               </div>
          </>
     )
}