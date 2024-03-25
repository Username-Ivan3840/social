import styles from "./Profile.module.css"
import Posts from "./posts/Posts"
import User from "../user/User"

function Profile({ dataPost, addPost }) {
    return (
        <div className={styles.profile}>
            <User />

            <Posts dataPost={dataPost} addPost={addPost} />

        </div >


    )
}
export default Profile