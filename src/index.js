import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addText } from './Data/state';
import { addPost } from "./Data/state"
import { dialogChange } from './Data/state';
import store from './Data/state'
import { subscribe } from "./Data/state"
let rerender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App dialogData={store._state.dialogData} postData={store._state.postData} FriendData={store._state.FriendData} addPost={store.addPost} addText={store.addText} dialogChange={store.dialogChange} textNow={store._state.text} />
    );
}

reportWebVitals();
rerender(store._state)
store.subscribe(rerender)
export default rerender