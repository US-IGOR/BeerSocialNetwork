import React from "react";
import s from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";

let postDataText = [
    {id: 1, post: 'Hi', qtyLike: 5},
    {id: 2, post: 'Helol, whuts uuup?', qtyLike: 1},
    {id: 3, post: 'How are you?', qtyLike: 2},
]


export const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost data={postDataText}/>
        </div>
    )
}