import React from "react";
import {messagePageType, sendMessageAC, updMessageBodyAC} from "../../Redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/whithAuthRedirect";

type mapStateToPropsType = {
    messagePage: messagePageType
}
type mapDispatchToPropsType = {
    updMessageBody: (bodyMessage: string) => void,
    onSendMessage: () => void
}

export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        updMessageBody: (bodyMessage: string) => {
            dispatch(updMessageBodyAC(bodyMessage))
        },
        onSendMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}

let AuthRedirectComponent = withAuthRedirect (Messages)
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default MessagesContainer;



