import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Top10} from "./components/Top10/Top10";
import MessagesContainer from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

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


const App = () => {
    return (
        <div className="App">

            <div className='app-wraper'>
                <Header/>
                <NavBar/>

                <div className='app_wraper_content'>
                    <Route path={'/profile'}
                           render={() =>
                               <ProfileContainer/>}/>
                    <Route path={'/messages'}
                           render={() =>
                               <MessagesContainer/>
                           }/>
                    <Route path={'/top10'} render={() => <Top10/>}/>

                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                </div>

                {/*                    <footer className='footer'>
                        <a href='http://nubo.ru/'> www.nubo.ru footer</a>
                    </footer>*/}
            </div>
        </div>

    )
}


export default App;