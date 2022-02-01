//https://www.youtube.com/watch?time_continue=1577&v=cbnExb3GSFM&feature=emb_logo
//26 min


import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/Store';
import { RootStateType} from "./Redux/Store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./Redux/reduxStore";


const onChange = () => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store} dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



onChange();
store.subscribe(()=> {
    onChange()
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
