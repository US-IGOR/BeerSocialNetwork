import React from "react";
import s from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";



type PropsTypeProfile = {

    postDataText: Array<typeArrayMessagesPostDataText>
    //addPost:(postText:string)=>void
    newPostText:string
   // updNewPostText:(updNewPostText:string)=>void
    dispatch:(action:any)=>void
}
type typeArrayMessagesPostDataText = {
    id: number
    post: string
    qtyLike: number
}



export const Profile = (props:PropsTypeProfile) => {
    return (
        <div >
            --[Profile]--

            <ProfileInfo/>
            <MyPost
                postDataText={props.postDataText}
                //addPost={props.addPost}
                newPostText={props.newPostText}
               // updNewPostText={props.updNewPostText}
                dispatch={props.dispatch}
            />
            --[Profile]--
        </div>
    )
}