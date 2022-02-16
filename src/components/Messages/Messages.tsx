import React, {ChangeEvent} from "react";
import s from './Messages.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesText} from "./MessagesText/MessagesText";
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
        </div>

    )
};


export default Messages;