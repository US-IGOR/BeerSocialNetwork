import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {Top10} from "./components/Top10/Top10";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">

                <div className='app-wraper'>
                    <Header/>
                    <NavBar/>
                    <div className='app_wraper_content'>
                        <Route path={'/profile'} render={()=>  <Profile/>}/>
                        <Route path={'/Messages'} render={()=>  <Messages/>}/>
                        <Route path={'/Top10'} render={()=>  <Top10/>}/>

                    </div>

{/*                    <footer className='footer'>
                        <a href='http://nubo.ru/'> www.nubo.ru footer</a>
                    </footer>*/}
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;