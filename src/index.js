import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import avatar3 from "./img/avatar3.jpg"
import avatar4 from "./img/avatar4.jpg"
import avatar2 from "./img/avatar2.png"
let dialogData = [{ name: "Elonte Mask", text: "hello!", id: "1" }, { name: "Bill gets", text: "Hi!", id: "2" }, { name: "Vasua Ivanov", text: "hi!Go Mars", id: "3" }, { name: "Ivan Ivanov", text: "Go go", id: "4" }]
let postData = [{ name: "stiv djobs", text: "messeng for you", img: avatar2, nuberLike: "5" }, { name: "Petua Grishin", text: "some text for you!", img: avatar3, nuberLike: "23" }, { name: "Vasua Ivanov", text: "some text in frops", img: avatar4, nuberLike: "30" }]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App dialogData={dialogData} postData={postData} />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
