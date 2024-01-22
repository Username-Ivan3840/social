import avatar2 from "../../img/avatar2.png"
import avatar from "../../img/avatar.png"
import styles from "./Profile.module.css"
import Posts from "./posts/Posts"

function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.me}>
                <img src={avatar} alt="profile mini photo" width={100} />
                <p className={styles.profileText}>Elon mask</p>
            </div>
            <Posts />

        </div>


    )
}
export default Profile