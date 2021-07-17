import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";


type TypePostDataText = {
    data: Array<typeArrayTypePostDataText>
}

type typeArrayTypePostDataText = {
    id: number
    post: string
    qtyLike: number
}


export const MyPost = (props:TypePostDataText) => {
    return (
        <div className={s.myPostBlock}>
            <div>
                <h4>my post</h4>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>add post</button>
                    </div>
                </div>
                <div className={s.post}>
                    { props.data.map (m => <Post data={m.post} qtyLike={m.qtyLike}/> )}
                </div>
            </div>
        </div>
    )
}