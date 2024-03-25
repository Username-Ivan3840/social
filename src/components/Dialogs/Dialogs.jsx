import Dialog from "./Dialog/Dialog"
import styles from "./Dialogs.module.css"
import React from "react"
import { createRef } from "react"
let dialogs = React.createRef()

function Dialogs({ data, gah, addText }) {
    let dobulePost = () => {
        addText(dialogs.current.value)
    }
    return (
        <div className={styles.messages}>
            <div className={styles.messageCont}>
                {data.map((item, idx) => <Dialog name={item.name} text={item.text} id={item.id} />)}
                {/* <Dialog name={dialogData[0].name} text={dialogData[0].text} id={dialogData[0].id} />
                <Dialog name={dialogData[1].name} text={dialogData[1].text} id={dialogData[1].id} />
                <Dialog name={dialogData[2].name} text={dialogData[2].text} id={dialogData[2].id} /> */}
            </div>
            <div className={styles.messageAction}>
                <textarea className={styles.textareaMessage} ref={dialogs} cols="20" rows="3" placeholder="Отправить сообщение"></textarea>
                <button onclick={dobulePost} className={styles.messageButton}>{gah}</button>
            </div>
        </div>
    )

}
export default Dialogs