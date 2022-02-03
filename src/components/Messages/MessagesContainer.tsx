import React from "react";
import {messagePageType, sendMessageAC, updMessageBodyAC} from "../../Redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    messagePage: messagePageType
}
type mapDispatchToPropsType = {
    updMessageBody: (bodyMessage: string) => void,
    onSendMessage: () => void
}

export type MessagesPropsType = mapStateToPropsType &  mapDispatchToPropsType



let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updMessageBody: (bodyMessage: string) => {
            dispatch(updMessageBodyAC(bodyMessage))
        },
        onSendMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;