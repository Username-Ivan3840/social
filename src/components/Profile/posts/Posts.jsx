import styles from "./posts.module.css"
import Post from "./Post/Post.jsx"
import React, { createRef } from "react"
let postText = React.createRef()
function Posts({ dataPost, addPost }) {
    let dobulePost = () => {
        addPost(postText.current.value)
        // alert(document.querySelector("input").value)
    }
    return (
        <div className={styles.Posts}>
            <div className={styles.postsInp}>
                <input ref={postText} placeholder="enter the post" className={styles.input} />
                <button onClick={dobulePost} className={styles.buttonPosts}>Add post</button>
            </div>
            {dataPost.map((item, idx) => <Post name={item.name} text={item.text} img={item.img} numberLike={item.nuberLike} />)}
            { }
        </div>
    )
}


export default Posts