import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {Top10} from "./components/Top10/Top10";

type PropsTypeState = {
    state: RootStateType
    addPost:(postText:string)=>void
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
}
export type RootStateType = {
    messagePage: messagePageType
    postPage:postPageType

}


const App = (props: PropsTypeState) => {
    return (


            <div className="App">

                <div className='app-wraper'>
                    <Header/>
                    <NavBar/>
                    <div className='app_wraper_content'>
                        <Route path={'/profile'}
                               render={() =>
                                   <Profile
                                       postDataText={props.state.postPage.postDataText}
                                       addPost={props.addPost}
                                   />}/>
                        <Route path={'/Messages'}
                               render={() =>
                                   <Messages
                                       messagesDataUsers={props.state.messagePage.messagesDataUsers}
                                       messagesDataText={props.state.messagePage.messagesDataText}/>
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