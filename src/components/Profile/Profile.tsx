import React from "react";
import s from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {addPost} from "../../Redux/State";


type PropsTypeProfile = {
    postDataText: Array<typeArrayMessagesPostDataText>
    addPost:(postText:string)=>void
    newPostText:string
    updNewPostText:(updNewPostText:string)=>void
}
type typeArrayMessagesPostDataText = {
    id: number
    post: string
    qtyLike: number
}



export const Profile = (props:PropsTypeProfile) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost
                postDataText={props.postDataText}
                addPost={addPost}
                newPostText={props.newPostText}
                updNewPostText={props.updNewPostText}
            />
        </div>
    )
}