import Dialog from "./Dialog/Dialog"
import styles from "./Dialogs.module.css"

let dialogData = [{ name: "Elon Mask", text: "hello!", id: "1" }, { name: "Bill gets", text: "Hi!", id: "2" }, { name: "Vasua Ivanov", text: "hi!Go Mars", id: "3" }, { name: "Ivan Ivanov", text: "Go go", id: "4" }]
function Dialogs() {
    return (
        <div className={styles.messages}>
            <div className={styles.messageCont}>
                {dialogData.map((item, idx) => <Dialog name={item.name} text={item.text} id={item.id} />)}
                {/* <Dialog name={dialogData[0].name} text={dialogData[0].text} id={dialogData[0].id} />
                <Dialog name={dialogData[1].name} text={dialogData[1].text} id={dialogData[1].id} />
                <Dialog name={dialogData[2].name} text={dialogData[2].text} id={dialogData[2].id} /> */}
            </div>
            <div className={styles.messageAction}>
                <textarea className={styles.textareaMessage} cols="20" rows="3" placeholder="Отправить сообщение"></textarea>
                <button className={styles.messageButton}>отправить</button>
            </div>
        </div>
    )

}
export default Dialogs