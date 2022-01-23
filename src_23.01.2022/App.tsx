import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {Top10} from "./components/Top10/Top10";
import store, {storeType} from "./Redux/State";

type PropsTypeState = {
    store: storeType
    dispatch:any
}
type messagesDataUsersType = {
    id: number
    name: string
}
type messagesDataTextType = {
    id: number
    textMessage: string
}
type postDataTextType = {
    id: number
    post: string
    qtyLike: number
}
type messagePageType = {
    messagesDataUsers: Array<messagesDataUsersType>
    messagesDataText: Array<messagesDataTextType>
}
type postPageType = {
    postDataText: Array<postDataTextType>
    newPostText: string
}
export type RootStateType = {
    messagePage: messagePageType
    postPage: postPageType

}


const App = (props: PropsTypeState) => {
    const state=props.store.getState();
    return (


        <div className="App">

            <div className='app-wraper'>
                <Header/>
                <NavBar/>
                <div className='app_wraper_content'>
                    <Route path={'/profile'}
                           render={() =>
                               <Profile

                                   postDataText={props.store._state.postPage.postDataText}
                                   dispatch={props.dispatch}
                                   newPostText={props.store._state.postPage.newPostText}

                                   //addPost={props.store.addPost.bind(props.store)}
                                   //updNewPostText={props.store.updNewPostText.bind(props.store)}
                               />}/>
                    <Route path={'/Messages'}
                           render={() =>
                               <Messages
                                   messagesDataUsers={props.store._state.messagePage.messagesDataUsers}
                                   messagesDataText={props.store._state.messagePage.messagesDataText}
                               />
                           }/>
                    <Route path={'/Top10'} render={() => <Top10/>}/>

                </div>

                {/*                    <footer className='footer'>
                        <a href='http://nubo.ru/'> www.nubo.ru footer</a>
                    </footer>*/}
            </div>
        </div>

    )
}


export default App;