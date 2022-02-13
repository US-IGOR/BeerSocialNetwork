import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {actionsTypes, storeType} from "../../Redux/Store";
import {MyPostContainer} from "./MyPost/MyPostContainer";

type ProfileType = {

}

export const Profile = (props:any) => {

    return (
        <div>

            <ProfileInfo profile={props.props}/>
            <MyPostContainer  />
        </div>
    )
}