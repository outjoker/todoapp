import styles from './footer.module.css'

export default function Footer({completedTodoItems, totalTodoItems}){
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Total TodoItems is {totalTodoItems}</span>

            <span className={styles.item}>completed todoitems list is {completedTodoItems}</span>
        </div>
    )
}