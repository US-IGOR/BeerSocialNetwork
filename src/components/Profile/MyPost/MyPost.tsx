import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";


let postDataText = [
    {id: 1, post: 'Hi', qtyLike: 5},
    {id: 2, post: 'Helol, whuts uuup?', qtyLike: 1},
    {id: 3, post: 'How are you?', qtyLike: 2},
]

type TypePostDataText = {
    data: Array<typeArrayTypePostDataText>
}
type typeArrayTypePostDataText = {
    id: number
    post: string
    qtyLike: number
}


export const MyPost = () => {
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
                    <Post data={postDataText[0].post} qtyLike={postDataText[0].qtyLike}/>
                    <Post data={postDataText[1].post} qtyLike={postDataText[1].qtyLike}/>
                    <Post data={postDataText[2].post} qtyLike={postDataText[2].qtyLike}/>
                </div>
            </div>
        </div>
    )
}