import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
<<<<<<< HEAD
import {actionsTypes, storeType} from "../../Redux/Store";
import {MyPostContainer} from "./MyPost/MyPostContainer";
=======
import {actionsTypes} from "../../Redux/Store";

>>>>>>> 9a3106a28fc1128c1ee200ec731c6a41fc07457c


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