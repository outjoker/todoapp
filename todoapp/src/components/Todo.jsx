import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo(){
    const [todolist, setTodolist] = useState([]);
    return (
        <div>
           <Form todolist={todolist} setTodolist={setTodolist} />
           <TodoList todolist={todolist}/>
        </div>
    )
}   