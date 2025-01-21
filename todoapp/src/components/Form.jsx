import { useState } from "react";
export default function Form ({todolist, setTodolist}) {
    const [todo, setTodo] = useState("");
    
    function handleSubmit(e){
        e.preventDefault()
        // using spread operator to hold the old items in the todoslist
        setTodolist([...todolist, todo])
        console.log(todolist)
        //setting input text to empty
        setTodo("")
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input 
                    type="text" value={todo}
                    onChange={(e)=> setTodo(e.target.value)}>
                </input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}