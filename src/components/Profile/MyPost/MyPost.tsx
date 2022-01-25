import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {addPostAC, updNewPostTextAC} from "../../../Redux/State";


type PropsTypeProfile = {
    postDataText: Array<typeArrayMessagesPostDataText>
    // addPost: (postText: string) => void
    newPostText: string
    //  updNewPostText: (updNewPostText: string) => void
    dispatch: (action: any) => void  //actionsTypes
}
type typeArrayMessagesPostDataText = {
    id: number
    post: string
    qtyLike: number

}


export const MyPost = (props: PropsTypeProfile) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const localAddPost = () => {props.dispatch(addPostAC())}

    const onPostChange = () => {

        let text = newPostElement.current ? newPostElement.current.value : '----';
        if (newPostElement.current !== null) {
            newPostElement.current.value = '';
        }


        props.dispatch(updNewPostTextAC(text))

    }


    return (
        <div className={s.myPostBlock}>
            --[MyPost]--
            <div>
                <h4>my posts:</h4>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  ref={newPostElement}
                                  value={props.newPostText}
                                                          />
                    </div>
                    <div>
                        <button onClick={localAddPost}>add post</button>
                    </div>
                </div>
                <div className={s.post}>
                    {props.postDataText.map(m => <Post key={m.id} data={m.post} qtyLike={m.qtyLike}/>)}
                    <h1>123</h1>
                    <h1>123</h1>
                </div>
            </div>
            --[MyPost]--
        </div>
    )
}