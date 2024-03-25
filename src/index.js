import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addText } from './Data/state';
import { addPost } from "./Data/state"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App dialogData={state.dialogData} postData={state.postData} FriendData={state.FriendData} addPost={addPost} addText={addText} />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
