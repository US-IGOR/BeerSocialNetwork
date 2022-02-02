import React from "react";
import {sendMessageAC, updMessageBodyAC} from "../../Redux/MessagesReducer";
import  {RootStateType} from "../../Redux/Store";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps= (state:RootStateType) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updMessageBody: (bodyMessage: string)=> {
            dispatch(updMessageBodyAC(bodyMessage))
        },
        onSendMessage: ()=> {
            dispatch(sendMessageAC())
        }

    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);


export default MessagesContainer;