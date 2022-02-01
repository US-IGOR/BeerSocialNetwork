import React from "react";
import {addPostAC, updNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPost} from "./MyPost";
import {storeType} from "../../../Redux/Store";


type PropsTypeProfile = {
    //postDataText: Array<typeArrayMessagesPostDataText>
   // addPost: (postText: string) => void
    store:storeType


    //newPostText: string
    //  updNewPostText: (updNewPostText: string) => void
    // dispatch: (action: any) => void  //actionsTypes
}
type typeArrayMessagesPostDataText = {
    id: number
    post: string
    qtyLike: number
}
export const MyPostContainer = (props: PropsTypeProfile) => {
    let state = props.store.getState();


    const localAddPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (textValue: string) => {
        props.store.dispatch(updNewPostTextAC(textValue))
    }
    return (
        <MyPost
            updNewPostText={onPostChange}
            addPost={localAddPost}
            postDataText = { state.postPage.postDataText }
            newPostText= {state.postPage.newPostText}


    //        postDataText={props.postDataText}
     //       newPostText={props.newPostText}
     //       dispatch={props.dispatch}
        />
    )
}