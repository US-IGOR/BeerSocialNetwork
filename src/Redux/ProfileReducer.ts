

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type actionsProfileReducerTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updNewPostTextAC>


export type postPageType = {
    postDataText: Array<postDataTextType>
    newPostText: string
}
export type postDataTextType = {
    id: number
    post: string
    qtyLike: number
}


let initialState: postPageType = {
    postDataText: [
        {id: 1, post: 'Hi', qtyLike: 5},
        {id: 2, post: 'Hello, whats up?', qtyLike: 1},
        {id: 3, post: 'How are you?', qtyLike: 2},
    ],
    newPostText: ''
}


const ProfileReducer = (state: postPageType = initialState, action: actionsProfileReducerTypes):postPageType => {

    switch (action.type) {
        case ADD_POST : {
            let newPost =
                {
                    id: new Date().getTime(),
                    post: state.newPostText,
                    //  post: postText,
                    qtyLike: 0
                }
            return {
                ...state,
                postDataText: [newPost, ...state.postDataText],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.updNewPostText
            }
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