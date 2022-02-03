import React from "react";
import {addPostAC, postDataTextType,  updNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    postDataText: Array<postDataTextType>
    newPostText: string
}
type mapDispatchToPropsType = {
    updNewPostText: (textValue: string) => void,
    addPost: () => void
}

export type MyPostType = mapStateToPropsType &  mapDispatchToPropsType

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        postDataText: state.postPage.postDataText,
        newPostText: state.postPage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
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