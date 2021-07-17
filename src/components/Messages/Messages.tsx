import React from "react";
import {NavLink} from "react-router-dom";
import s from './Messages.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesText} from "./MessagesText/MessagesText";

let messagesDataUsers = [
    {id: 1, name: 'Igor'},
    {id: 2, name: 'Evgenia'},
    {id: 3, name: 'Roma'},
]

let messagesDataText = [
    {id: 1, textMessage: 'Hi'},
    {id: 2, textMessage: 'Helol, whuts uuup?'},
    {id: 3, textMessage: 'How are you?'},
]

/*let mapingMessagesDataText = messagesDataText.map(m()=>messagesDataUsers)*/

//Messages
const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem data={messagesDataUsers}/>
            </div>
            <div className={s.messages}>
                {messagesDataText.map(m=>
                    <MessagesText message={m.textMessage}/>)}
            </div>
        </div>
    )
};



export default Messages;