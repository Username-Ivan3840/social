import styles from "./NavBar.module.css"
function NavBar(){
    return(
        <div className={styles.navbar}>
            <a href="" className={styles.navigation}>Профиль</a>
            <a href="" className={styles.navigation}>Сообщения</a>
            <a href="" className={styles.navigation}>Пользователи</a>
        </div>
       
    )
}
export default NavBar