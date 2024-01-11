
import styles from "./post.module.css"
function Post({name,text,img}){
    return(
        <div className="Post">
                    <img  src={img} alt="profile mini photo" className={styles.avatar} width={"70"} />
                    <span className={styles.name}>{name}</span>
                    <p className={styles.PostText}>some text{text}</p>
                </div>
    )
}
export default Post