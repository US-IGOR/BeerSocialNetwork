import React from "react";
import {addPostAC, updNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPost} from "./MyPost";
import {RootStateType, storeType} from "../../../Redux/Store";
import {connect} from "react-redux";
import Messages from "../../Messages/Messages";
import {sendMessageAC, updMessageBodyAC} from "../../../Redux/MessagesReducer";


let mapStateToProps = (state: RootStateType) => {
    return {
        postDataText: state.postPage.postDataText,
        newPostText: state.postPage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updNewPostText: (textValue: string) => {
            dispatch(updNewPostTextAC(textValue))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);