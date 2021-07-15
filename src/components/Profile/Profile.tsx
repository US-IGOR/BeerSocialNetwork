import React from "react";
import s from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}