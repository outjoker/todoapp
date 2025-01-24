import Todoitem from "./Todoitem"
import styles from "./todolist.module.css"
export default function TodoList({todolist, setTodolist}){
    console.log(todolist)
    return(
        <div className={styles.list}>
             {todolist.map((eachitem)=>(
                <Todoitem key={eachitem} item={eachitem} todolist={todolist} setTodolist={setTodolist}/>
            ) )}
        </div>
    )
}