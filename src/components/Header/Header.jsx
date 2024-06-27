import styles from "./Header.module.css"
import avatar from "../../img/avatar.png"
function Header(){
    return(
        <div className={styles.header}>
            <img src={avatar} alt="" className={styles.img} />
            <h2 className={styles.title}>Сергей Иванович</h2>
            

        </div>
        

    )
}
export default Header