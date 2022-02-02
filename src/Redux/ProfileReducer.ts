import {postPageType} from "./Store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type actionsProfileReducerTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updNewPostTextAC>


let initialState: postPageType = {
    postDataText: [
        {id: 1, post: 'Hi', qtyLike: 5},
        {id: 2, post: 'Helol, whuts uuup?', qtyLike: 1},
        {id: 3, post: 'How are you?', qtyLike: 2},
    ],
    newPostText: ''
}


const ProfileReducer = (state: postPageType = initialState, action: actionsProfileReducerTypes) => {


    switch (action.type) {

        case ADD_POST : {
            let newPost =
                {
                    id: new Date().getTime(),
                    post: state.newPostText,
                    //  post: postText,
                    qtyLike: 0
                }
            let stateCopy = {...state}
            stateCopy.postDataText = [...state.postDataText]
            stateCopy.newPostText = ''
            stateCopy.postDataText.unshift(newPost);

            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT:{

            let stateCopy = {...state}
            stateCopy.newPostText = action.updNewPostText;
            return stateCopy
        }
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