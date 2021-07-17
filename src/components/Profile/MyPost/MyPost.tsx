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
    let addPost = () => {
        props.addPost(newPostElement.current ? newPostElement.current.value:'----')
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
                        <button onClick={addPost}>add post</button>
                    </div>
                </div>
                <div className={s.post}>
                    { props.postDataText.map (m => <Post data={m.post} qtyLike={m.qtyLike}/> )}
                </div>
            </div>
        </div>
    )
}