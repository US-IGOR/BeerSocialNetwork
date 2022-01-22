import React from "react";
import s from './MyPost.module.css';
import {Post} from "./Post/Post";


type PropsTypeProfile = {
    postDataText: Array<typeArrayMessagesPostDataText>
    // addPost: (postText: string) => void
    newPostText: string
    //  updNewPostText: (updNewPostText: string) => void
    dispatch: (action: any) => void
}
type typeArrayMessagesPostDataText = {
    id: number
    post: string
    qtyLike: number

}


export const MyPost = (props: PropsTypeProfile) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let localAddPost = () => {
        props.dispatch({type: 'ADD-POST'})


        /*      (newPostElement.current ? newPostElement.current.value : '----');
              if (newPostElement.current !== null) {
                  newPostElement.current.value = ''
              }*/
    }

    const onPostChange = () => {

        let text = newPostElement.current ? newPostElement.current.value : '----';
        if (newPostElement.current !== null) {
            newPostElement.current.value = '';
        }

        let action = {type: 'UPDATE-NEW-POST-TEXT', updNewPostText: text};
        props.dispatch(action)

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