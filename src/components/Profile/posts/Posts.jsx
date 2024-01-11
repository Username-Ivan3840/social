import styles from "./posts.module.css"
import avatar2 from "../../../img/avatar2.png"
import Post from "./Post/Post.jsx"
import avatar3  from "../../../img/avatar3.jpg"
import avatar4 from "../../../img/avatar4.jpg"
function Posts(){
 return(
    <div className={styles.Posts}>
                <div className={styles.postsInp}>
                    <input placeholder="enter the post" className={styles.input}/>
                    <button className={styles.buttonPosts}>Add post</button>
                </div>
                
                
                <Post name={"Stiv Djobs"} img={avatar2} text={"messeng for you"}/>
                <Post name={"Petya Grishin"} img={avatar3} text={"some text for you"}/>
                <Post name={"Vasua Ivanov"} img={avatar4} text={"some text in frops"}/>
            </div>
 )
}
 

export default Posts