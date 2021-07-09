 import React from "react";
import s from './MyPost.module.css';
 import {Post} from "./Post/Post";


export const MyPost = () => {
    return (
        <div className={s.content}>
                <div>
                my post
                    <div>
                        <textarea></textarea>
                        <button>add post</button>
                    </div>
                <Post data={'sklhhvblkzshhdbvkljb'} qtyLike={5} />
                <Post data={'Хай'}  qtyLike={555} />
                <Post data={'Hallo'}  qtyLike={15} />
                <Post data={'     :)'} />
            </div>
        </div>
    )
}