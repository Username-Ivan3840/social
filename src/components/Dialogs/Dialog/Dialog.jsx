import styles from "./Dialog.module.css"
function Dialog({ name, text }) {
    return (
        <div className={styles.message}>
            <p className={styles.messageName}>{name}</p>
            <p className={styles.messageText}>{text}</p>
        </div>
    )
}
export default Dialog