import styles from "./todoitem.module.css"
export default function Todoitem(props) {


    /**
     * this function is whenever we hover on the todo item, to mark it as completed.
     */
    function handleTodoItemClick(itemname){
        console.log("todo item clicked ........", itemname)
        const newTodoList = props.todolist.map((eachTodoObject)=> eachTodoObject.name == itemname ? {...eachTodoObject, completed: !eachTodoObject.completed} : eachTodoObject)
        // in the above map function, i have used spread operator to copy the name key in the 
        // eachTodoObject as it is, using spread operator i am making sure, i am copying the existing object as it is
        props.setTodolist(newTodoList)
    }


    function handleDeleteSubmit(item){
        console.log("Delete button clicked for item ",item)
        //console.log(props)
        // using setTodolist delete the item on which button is clicked 
        //filter function returns the list without the item which is clicked by Delete button

        /**
         *  filter() method iterates through each element of the original array -> todoslist
         *  It applies a callback function to each element. This function typically returns a boolean value
         * Element selection: If the callback function returns true for an element, that element is included in the new array and vice versa 
         * since we are returning false when we find the element matching the item on which delete is clicked, that item is removed from todoslist 
         * Finally we are setting the filtered array in setTodolist function
         */
        props.setTodolist(props.todolist.filter((eachtodoitem)=>eachtodoitem !== item))
    }
    // if the item is already marked completed by hovering & clicking on it ,
    //  based on that then we want to use a different style
    const className = props.item.completed ? styles.completed : ""

    return (
        <div className={styles.item}>
            <div className={styles.itemname}>
                <span className={className} onClick={()=> handleTodoItemClick(props.item.name)}>
                    {props.item.name}
                </span>
                
                <span>
                <button className={styles.deletebutton} onClick={()=>handleDeleteSubmit(props.item)}>X</button>
                </span>
            </div>
            
            <hr className={styles.differentiator} />
        </div>
    )
}