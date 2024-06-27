import style from "./Friends.module.css"
import Friend from "./friend/Friend"
function Friends({ FriendData }) {
    return (
        <div className={style.Friends}>
            <h2 className={style.title}>Friends</h2>
            <div className={style.boxContainer}>
                {FriendData.map((i, x) => <Friend key={x} name={i.name} img={i.img} />)}


            </div>



        </div>
    )
}
export default Friends