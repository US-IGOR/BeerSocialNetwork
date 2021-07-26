import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './Redux/State';
import {addPost, RootStateType, updNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const renderTree = (state: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updNewPostText={updNewPostText}

                    /*  messagesDataText={messagesDataText}*/
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state)
subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
