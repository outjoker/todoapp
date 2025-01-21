// this componnent talks about inline styling
const header = {color:"blue", fontSize:"60px"}
import styles from './inlinecomponent.module.css'

export default function Inlinecomponent(){

    return (
        //using the style from the style.css from css folder 
        <div>
            <h1 style={header}>Inline component without style css</h1>
            <h1 className={styles.header}>Inline component</h1> 
        </div>
    )
}