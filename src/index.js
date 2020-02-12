import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { addPost, updatePostText, updateMessageText, addMessage } from './Redux/State';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = () => {
    ReactDOM.render(<BrowserRouter><App state={store.getState()}
        addPost={store.addPost}
        updatePostText={store.updatePostText} 
        updateMessageText={store.updateMessageText}
        addMessage={store.addMessage} />
    </BrowserRouter>, document.getElementById('root'));
}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();