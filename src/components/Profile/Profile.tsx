import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";



export const Profile = (props:any) => {

    return (
        <div>

            <ProfileInfo profile={props.profile}/>
            <MyPostContainer  />
        </div>
    )
}