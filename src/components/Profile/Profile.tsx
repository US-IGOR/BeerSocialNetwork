import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {actionsTypes, storeType} from "../../Redux/Store";
import {MyPostContainer} from "./MyPost/MyPostContainer";


export const Profile = () => {
    console.log('1')
    return (
        <div>
            --[Profile]--

            <ProfileInfo/>
            <MyPostContainer
            />
            --[Profile]--
        </div>
    )
}