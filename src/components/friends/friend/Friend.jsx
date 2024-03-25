import style from "./Friend.module.css"
function Friend({ name, img }) {
    return (
        <div className={style.box}>
            <img src={img} alt="картинка" className={style.imgFriends} />
            <p className={style.textFriends}>{name}</p>
        </div>
    )
}
export default Friend