export let ava1= 'https://frm-wows-us.wgcdn.co/wows_forum_us/monthly_2017_08/59a05a0db46c4_Futurama----1244575.thumb.jpeg.1fa6d51764ec3b5cb9f5e887ba30aa85.jpeg'
export let ava3= 'https://www.kindpng.com/picc/m/727-7271359_philip-j-fry-avatar-hd-png-download.png'
export let ava2= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9T6w_LTm2OWy3DBwvsxeD5onAccBhlO_rQ&usqp=CAU'
export let ava4= 'https://upload.wikimedia.org/wikipedia/uk/d/db/%D0%96%D1%83%D0%B9%D0%BA%D0%B0_%28%D0%A4%D1%83%D1%82%D1%83%D1%80%D0%B0%D0%BC%D0%B0%29.jpg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type actionsProfileReducerTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>


export type initialStateType = {
    users: Array<userType>
}
export type userType = {

    id: number,
    followed: boolean,
    name: string,
    status: string,
    location: locationType
    photos:any
}
export type locationType ={
    country: string
        city: string
}



let initialState: initialStateType  = {
    users: []
}


const UsersReducer = (state: initialStateType = initialState, action: actionsProfileReducerTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:true}
                    }
                    return u
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:false}
                    }
                    return u
                })
            }
        case SET_USERS :

            return {
                ...state,
                users: [...state.users, ...action.users  ]

            }



        default :
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)


export const setUsersAC = (users: Array<userType>) => ({type: SET_USERS,users
} as const)




export default UsersReducer;