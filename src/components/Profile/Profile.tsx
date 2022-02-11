import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {actionsTypes, storeType} from "../../Redux/Store";
import {MyPostContainer} from "./MyPost/MyPostContainer";

type ProfileType = {

}

export const Profile = (props:any) => {
    console.log('1')
    return (
        <div>
            --[Profile]--

            <ProfileInfo profile={props.profile}/>
            <MyPostContainer
            />
            --[Profile]--
        </div>
    )
}