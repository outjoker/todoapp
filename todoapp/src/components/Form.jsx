import { useState } from "react";
import styles from "./form.module.css"
export default function Form({ todolist, setTodolist }) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        // using spread operator to hold the old items in the todoslist
        setTodolist([...todolist, todo])
        console.log(todolist)
        //setting input text to empty
        setTodo("")
    }
    return (

        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputformContainer}>
                <input className={styles.moderninput}
                    placeholder="Enter the ToDo item"
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}>
                </input>
                <button className={styles.modernbutton} type="submit">Add</button>

            </div>
        </form>

    )
}