import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from './Messages.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesText} from "./MessagesText/MessagesText";
import {messagePageType, sendMessageAC, updMessageBodyAC} from "../../Redux/MessagesReducer";
import { RootStateType, storeType} from "../../Redux/Store";
import {MessagesPropsType} from "./MessagesContainer";


const Messages = (props: MessagesPropsType) => {
    const state = props.messagePage;

    let newMessageBody = state.newMessageBody
    let dialogElements = state.dialogs
    let messagesElements = state.messages.map(m => <MessagesText key={m.id} message={m.textMessage}/>)

    let onSendMessageClick = () => {
        props.onSendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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