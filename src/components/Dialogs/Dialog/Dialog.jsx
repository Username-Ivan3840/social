import { NavLink } from "react-router-dom"
import styles from "./Dialog.module.css"
function Dialog({ name, text, id }) {
    return (
        <div className={styles.message}>
            <NavLink to={`/dialog/${id}`} className={styles.messageName}>{name}</NavLink>
            <p className={styles.messageText}>{text}</p>
        </div>
    )
}
export default Dialog