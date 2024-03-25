import avatar3 from "./../img/avatar3.jpg"
import avatar4 from "./../img/avatar4.jpg"
import avatar2 from "./../img/avatar2.png"
import friends1 from "./../img/avatar/1.jpg"
import friends2 from "./../img/avatar/2.webp"
import friends3 from "./../img/avatar/3.jpg"
import friends4 from "./../img/avatar/4.jpg"
let state = {
    dialogData: [{ name: "Elonte Mask", text: "hello!", id: "1" }, { name: "Bill gets", text: "Hi!", id: "2" }, { name: "Vasua Ivanov", text: "hi!Go Mars", id: "3" }, { name: "Ivan Ivanov", text: "Go go", id: "4" }],
    postData: [{ name: "stiv djobs", text: "messeng for you", img: avatar2, nuberLike: "5" }, { name: "Petua Grishin", text: "some text for you!", img: avatar3, nuberLike: "23" }, { name: "Vasua Ivanov", text: "some text in frops", img: avatar4, nuberLike: "30" }],
    FriendData: [{ name: "Petua Kolobkov", img: friends1 }, { name: "Pavel Kosobokov", img: friends2 }, { name: "Nikita Petrov", img: friends3 }, { name: "Masha Djonbs", img: friends4 }]
}

export function addPost(postText) {
    let newPost = { name: "Create Ref", text: postText, img: avatar2, numberLike: "5" }
    state.postData.push(newPost)
    console.log(state.postData)
}
export function addText(dialogText) {
    let addDialog = { name: "Ulia Petrova", text: dialogText, id: "6" }
    state.dialogData.push(addDialog)
}
export default state

