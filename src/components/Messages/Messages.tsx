import React from "react";
import {NavLink} from "react-router-dom";
import s from './Messages.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesText} from "./MessagesText/MessagesText";



type PropsTypeMessages = {
    messagesDataUsers: Array<typeArrayMessagesDataUsers>
    messagesDataText: Array<typeArrayMessagesDataText>
}
type typeArrayMessagesDataUsers = {
    id: number
    name: string
}
type typeArrayMessagesDataText = {
    id: number
    textMessage: string
}


const Messages = (props:PropsTypeMessages) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem messagesDataUsers={props.messagesDataUsers}/>
            </div>
            <div className={s.messages}>
                {props.messagesDataText.map(m=>
                    <MessagesText message={m.textMessage}/>)}
            </div>
        </div>
    )
};



export default Messages;