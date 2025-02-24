import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    const [todolist, setTodolist] = useState([]);
    //return todos from todolist which are done 
    const completedTodoItems = todolist.filter((todo)=> todo.completed).length
    const totalTodoItems = todolist.length
    return (
        <div>
           <Form todolist={todolist} setTodolist={setTodolist} />
           <TodoList todolist={todolist} setTodolist={setTodolist}/>
           <Footer completedTodoItems={completedTodoItems} totalTodoItems={totalTodoItems}/>
        </div>
    )
}   