import React from "react";
import {NavLink} from "react-router-dom";
import s from './Messages.module.css';


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


//Messages
const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem data={messagesDataUsers}/>

            </div>
            <div className={s.messages}>
                <MessagesText message={messagesDataText[0].textMessage}/>
                <MessagesText message={messagesDataText[1].textMessage}/>
                <MessagesText message={messagesDataText[2].textMessage}/>
            </div>
        </div>
    )
};


//Messages-DialogItem
type PropsTypeDialogItem = {
    data: Array<TypeArraymessagesDataUsers>
}

export const DialogItem = (props: PropsTypeDialogItem) => {

    return (
        <div>
            <div className={s.dialog}><NavLink to={'/messges/' + props.data[0].id}>{props.data[0].name}</NavLink></div>
            <div className={s.dialog}><NavLink to={'/messges/' + props.data[1].id}>{props.data[1].name}</NavLink></div>
            <div className={s.dialog}><NavLink to={'/messges/' + props.data[2].id}>{props.data[2].name}</NavLink></div>
        </div>
    )
};

//Messages-MessagesText
type PropsTypeMessagesText = {
    message: string
}
export const MessagesText = (props: PropsTypeMessagesText) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>

)
};


type TypeArraymessagesDataUsers = {
    id: number
    name: string
}


export default Messages;