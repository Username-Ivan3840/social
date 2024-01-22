import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
function NavBar() {
    return (
        <div className={styles.navbar}>
            <NavLink to="/profile" className={styles.navigation}>Профиль</NavLink>
            <NavLink to="/message" className={styles.navigation}>Сообщения</NavLink>
            <NavLink to="/users" className={styles.navigation}>Пользователи</NavLink>
        </div>

    )
}
export default NavBar