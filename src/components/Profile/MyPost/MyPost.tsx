import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";


type PropsTypeProfile = {
    postDataText: Array<typeArrayMessagesPostDataText>
    addPost:(postText:string)=>void
}
type typeArrayMessagesPostDataText = {
    id: number
    post: string
    qtyLike: number
}




export const MyPost = (props:PropsTypeProfile) => {

    let newPostElement=React.createRef<HTMLTextAreaElement>();
    let localAddPost = () => {
        props.addPost(newPostElement.current ? newPostElement.current.value:'----');
       if (newPostElement.current !==null) {
           newPostElement.current.value=''
       }
           }


    return (
        <div className={s.myPostBlock}>
            <div>
                <h4>my post</h4>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={localAddPost}>add post</button>
                    </div>
                </div>
                <div className={s.post}>
                    { props.postDataText.map (m => <Post key={m.id} data={m.post} qtyLike={m.qtyLike}/> )}
                </div>
            </div>
        </div>
    )
}