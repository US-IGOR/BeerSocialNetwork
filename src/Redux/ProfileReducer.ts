import MessageReducer from "./MessagesReducer";
import {postPageType} from "./State";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type actionsProfileReducerTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updNewPostTextAC>


const ProfileReducer = (state:postPageType, action:actionsProfileReducerTypes) => {


    switch (action.type) {

        case ADD_POST :

            let temp = state.newPostText
            state.newPostText = ''

            const newPost =
                {
                    id: new Date().getTime(),
                    post: temp,
                    //  post: postText,
                    qtyLike: 0
                }
            state.postDataText.unshift(newPost);
            return state


        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.updNewPostText;
            return state
        default :
            return state

    }



}

export const addPostAC = () => (
    {
        type: ADD_POST
    } as const
)
export const updNewPostTextAC = (text: string) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        updNewPostText: text
    } as const
)


export default ProfileReducer;