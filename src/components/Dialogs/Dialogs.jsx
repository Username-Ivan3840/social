import Dialog from "./Dialog/Dialog"
import styles from "./Dialogs.module.css"
function Dialogs() {
    return (
        <div className={styles.messages}>
            <div className={styles.messageCont}>
                <Dialog name="Elon Mask" text="hello!" />
                <Dialog name="Bill gets" text="Hi!" />
                <Dialog name="Vasua Ivanov" text="hi!Go Mars" />
            </div>
            <div className={styles.messageAction}>
                <textarea className={styles.textareaMessage} cols="20" rows="3" placeholder="Отправить сообщение"></textarea>
                <button className={styles.messageButton}>отправить</button>
            </div>
        </div>
    )

}
export default Dialogs