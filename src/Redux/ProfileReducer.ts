import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

export type actionsProfileReducerTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updNewPostTextAC>| ReturnType<typeof setUserProfile>| ReturnType<typeof setUserStatus>


export type postPageType = {
    postDataText: Array<postDataTextType>
    newPostText: string
    profile:any
    status:string
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
    newPostText: '',
    status: '',
    profile: null
}


const ProfileReducer = (state: postPageType = initialState, action: actionsProfileReducerTypes):postPageType => {

    switch (action.type) {
        case ADD_POST : {
            let newPost =
                {
                    id: new Date().getTime(),
                    post: state.newPostText,
                    //  post: postText,
                    qtyLike: 0,
                    status: ''
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

        case SET_USER_PROFILE : {
            return { ...state,  profile: action.profile   }

        }

        case SET_USER_STATUS : {
            return { ...state,  status: action.status   }

        }

        default :
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT,updNewPostText: text} as const)
export const setUserProfile = (p: any) => ({type: SET_USER_PROFILE,profile:p} as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS,status} as const)
export const getUserProfile = (userId: number) =>  (dispatch:any) => {

    profileAPI.getProfile(userId)
        .then(response => {
          dispatch(setUserProfile(response.data))
        })
}
export const getUserStatus = (userId: number) =>  (dispatch:any) => {

    profileAPI.getStatus(userId)
        .then(response => {

          dispatch(setUserStatus(response.statusText))
         // dispatch(setUserStatus(response.statusText))
        })
}

export default ProfileReducer;