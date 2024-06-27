import Dialog from "./Dialog/Dialog"
import styles from "./Dialogs.module.css"
import React from "react"
import { createRef } from "react"
let dialogs = React.createRef()
let dialogsNameRef = React.createRef()

function Dialogs({ data, addText, dialogChange, textNow }) {
    let dobulePost = () => {
        // addText(dialogs.current.value)
        // console.log(document.querySelector("textarea").value)
        let text = dialogs.current.value
        let textDialogs = dialogsNameRef.current.value
        addText(text, textDialogs)
        console.log(textNow)
    }
    let dChange = () => {
        dialogChange(dialogsNameRef.current.value)
    }
    return (
        <div className={styles.messages}>
            <div className={styles.messageCont}>
                {data.map((item, idx) => <Dialog key={idx} name={item.name} text={item.text} id={item.id} />)}
            </div>
            <div className={styles.messageAction}>
                <input value={textNow} onChange={dChange} className={styles.input} ref={dialogsNameRef} placeholder="Введите имя" />
                <textarea className={styles.textareaMessage} ref={dialogs} cols="20" rows="3" placeholder="Отправить сообщение"></textarea>
                <button onClick={dobulePost} className={styles.messageButton}>Отправить</button>
            </div>
        </div>
    )

}

export default Dialogs