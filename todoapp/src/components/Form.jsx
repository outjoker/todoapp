import { useState } from "react";
import styles from "./form.module.css"
export default function Form({ todolist,  setTodolist }) {
    //const [todo, setTodo] = useState("");
    // previously we were just saving the todo item name alone 
    // if we want to now store the state of the todo item whether it is completed 
    // or not we need to change the datastructure of useState("") from string to object
    //hence commenting the above & declaring newly
    const [todo, setTodo]=useState({name: "", completed: false})

    function handleSubmit(e) {
        e.preventDefault()
        // using spread operator to hold the old items in the todoslist
        setTodolist([...todolist, todo])
     
        //setting input text to empty after entering the todo item
        setTodo({name: "", completed: false})
    }
    
    return (

        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputformContainer}>
                <input className={styles.moderninput}
                    placeholder="Enter the ToDo item"
                    type="text"
                    value={todo.name}
                    onChange={(e) => setTodo({name: e.target.value, completed: false})}>
                </input>
                <button className={styles.modernbutton} type="submit">Add</button>

            </div>
        </form>

    )
}