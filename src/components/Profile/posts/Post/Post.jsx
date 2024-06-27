import styles from "./post.module.css"
import like from "../../../../img/like/like.png"
function Post({ name, text, img, numberLike }) {
    return (
        <div className="Post">
            <img src={img} alt="profile mini photo" className={styles.avatar} width={"70"} />
            <span className={styles.name}>{name}</span>
            <p className={styles.PostText}>{text}</p>
            <div className={styles.likeContainer}>
                <img src={like} className={styles.like} alt="" />
                <p className={styles.numberLike}>{numberLike}</p>
            </div>

        </div>
    )
}
export default Post