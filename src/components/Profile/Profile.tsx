import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {Redirect} from "react-router-dom";



export const Profile = (props:any) => {
    if (!props.isAuth)  return <Redirect to={'login'}/>

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer  />
        </div>
    )
}