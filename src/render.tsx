import {addPost, RootStateType, updNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const renderTree = (state: RootStateType) => {

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