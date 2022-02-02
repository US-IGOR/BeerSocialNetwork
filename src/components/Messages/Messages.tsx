import React from "react";
import {NavLink} from "react-router-dom";
import s from './Messages.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesText} from "./MessagesText/MessagesText";
import {sendMessageAC, updMessageBodyAC} from "../../Redux/MessagesReducer";
import {messagePageType, RootStateType, storeType} from "../../Redux/Store";


type PropsTypeMessages = {
    updMessageBody: (action: any) => void
    onSendMessage: () => void
    messagePage: messagePageType
}

const Messages = (props: PropsTypeMessages) => {
    const state = props.messagePage;

    let newMessageBody = state.newMessageBody
    let dialogElements = state.messagesDataUsers
    let messagesElements = state.messagesDataText.map(m => <MessagesText key={m.id} message={m.textMessage}/>)

    let onSendMessageClick = () => {
        props.onSendMessage()
    }
    let onNewMessageChange = (e: any) => {
        let bodyMessage = String(e.target.value);
        props.updMessageBody(bodyMessage)

    }

    return (
        <div>

            --[Messages]--
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    <DialogItem messagesDataUsers={dialogElements}/>
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
            <div>
                <textarea placeholder={'Enter your message'}
                          value={newMessageBody}
                          onChange={onNewMessageChange}/>


                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>
            --[Messages]--
        </div>

    )
};


export default Messages;