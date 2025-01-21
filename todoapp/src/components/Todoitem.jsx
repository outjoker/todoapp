import styles from "./todoitem.module.css"
export default function Todoitem(props) {
    return (
        <div className={styles.item}>
        <div className={styles.itemname}>  
            {props.item}
        </div>
        <hr className={styles.differentiator} />
        </div>
    )
}