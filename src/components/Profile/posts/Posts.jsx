import styles from "./posts.module.css"

import Post from "./Post/Post.jsx"



function Posts({ dataPost }) {
    return (
        <div className={styles.Posts}>
            <div className={styles.postsInp}>
                <input placeholder="enter the post" className={styles.input} />
                <button className={styles.buttonPosts}>Add post</button>
            </div>

            {dataPost.map((item, idx) => <Post name={item.name} text={item.text} img={item.img} numberLike={item.nuberLike} />)}
            {/* <Post name={"Stiv Djobs"} img={avatar2} text={"messeng for you"} />
            <Post name={"Petya Grishin"} img={avatar3} text={"some text for you"} />
            <Post name={"Vasua Ivanov"} img={avatar4} text={"some text in frops"} /> */}
        </div>
    )
}


export default Posts