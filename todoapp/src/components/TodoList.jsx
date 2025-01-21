import Todoitem from "./Todoitem"
export default function TodoList({todolist}){
    console.log(todolist)
    return(
        <div>
             {todolist.map((eachitem)=>(
                <Todoitem key={eachitem} item={eachitem}/>
            ) )}
        </div>
    )
}