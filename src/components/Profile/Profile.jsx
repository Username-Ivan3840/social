import avatar2 from "../../img/avatar2.png"
import avatar from "../../img/avatar.png"
import styles from "./Profile.module.css"
import Posts from "./posts/Posts"
function Profile(){
    return(
        <div className={styles.profile}>
            <div className={styles.me}>
                <img src={avatar} alt="profile mini photo" width={100} />
                <p className={styles.profileText}>Elon mask</p>
            </div>
            <Posts/>
            <div className={styles.messages}>
                <div className={styles.messageCont}>
                    <div className={styles.message}>
                        <p className={styles.messageName}>stiv jobs</p>
                        <p className={styles.messageText}>hello! </p>
                    </div>
                    <div className={styles.message}>
                        <p className={styles.messageName}>stiv jobs</p>
                        <p className={styles.messageText}>hello! </p>
                    </div>
                    <div className={styles.message}>
                        <p className={styles.messageName}>stiv jobs</p>
                        <p className={styles.messageText}>hello! </p>
                    </div>
                </div>
                <div className={styles.messageAction}>
                    <textarea className={styles.textareaMessage} cols="30" rows="10"></textarea>
                    <button className={styles.messageButton}>отправить</button>
                </div>
            </div>
        </div>
        

    )
}
export default Profile