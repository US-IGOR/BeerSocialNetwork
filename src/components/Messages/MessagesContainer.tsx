import React from "react";
import {messagePageType, sendMessageAC, updMessageBodyAC} from "../../Redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/whithAuthRedirect";

type mapStateToPropsType = {
    messagePage: messagePageType
    isAuth:any
}
type mapDispatchToPropsType = {
    updMessageBody: (bodyMessage: string) => void,
    onSendMessage: () => void
}

export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        messagePage: state.messagePage ,
        isAuth: state.auth.isAuth
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