import React from "react";
import s from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";


type PropsTypeProfile = {

    postDataText: Array<typeArrayMessagesPostDataText>
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
            <MyPost postDataText={props.postDataText}/>
        </div>
    )
}