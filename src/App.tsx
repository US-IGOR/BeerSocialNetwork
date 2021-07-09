import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";


const App = () => {
    return (
        <div className="App">
            <div className='app-wraper'>

                <Header/>
                <NavBar/>
                <Profile/>

                {/*    <footer className='footer'>
                    <a href='http://nubo.ru/'> www.nubo.ru footer</a>
                </footer>*/}
            </div>
        </div>
    )
}


export default App;