import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {actionsTypes, storeType} from "../../Redux/Store";
import {MyPostContainer} from "./MyPost/MyPostContainer";


type PropsTypeProfile = {
    store: storeType

    // postDataText: Array<typeArrayMessagesPostDataText>
    //addPost:(postText:string)=>void
    // newPostText:string
    // updNewPostText:(updNewPostText:string)=>void
    dispatch: (action: actionsTypes) => void
}


export const Profile = (props: PropsTypeProfile) => {
    console.log('1')
    return (
        <div>
            --[Profile]--

            <ProfileInfo/>
            <MyPostContainer
                store={props.store}


                //postDataText={props.postDataText}
                //newPostText={props.newPostText}
                //dispatch={props.dispatch}


                //addPost={props.addPost}
                // updNewPostText={props.updNewPostText}
            />
            --[Profile]--
        </div>
    )
}