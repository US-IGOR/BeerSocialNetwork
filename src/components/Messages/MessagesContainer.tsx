import React from "react";
import {sendMessageAC, updMessageBodyAC} from "../../Redux/MessagesReducer";
import {actionsTypes, storeType} from "../../Redux/Store";
import Messages from "./Messages";


type PropsTypeMessages = {
    store: storeType
    dispatch: (action: actionsTypes) => void
}


const MessagesContainer = (props: PropsTypeMessages) => {
    const state = props.store.getState().messagePage;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (bodyMessage: any) => {
        props.dispatch(updMessageBodyAC(bodyMessage))
    }

    return <Messages

        updMessageBody={onNewMessageChange}
        onSendMessage={onSendMessageClick}
        messagePage={state}
    />

};


export default MessagesContainer;