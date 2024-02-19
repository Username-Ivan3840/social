import avatar from "../../img/avatar.png"
import styles from "./user.module.css"
function User() {
    return (
        <div className={styles.me}>
            <img src={avatar} alt="profile mini photo" width={100} />
            <p className={styles.profileText}>Elon mask</p>
        </div>
    )

}
export default User