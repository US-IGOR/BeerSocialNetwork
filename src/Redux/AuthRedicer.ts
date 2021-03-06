import {authAPI} from "../api/api";

export type actionsAuthReducerTypes =
    ReturnType<typeof setAuthUserData>


const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
};

//export type  userDataType = typeof initialState;


const authReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true

            };


        default :
            return state

    }


}


export const setAuthUserData = (id: number, login: string, email: string) => (
    {
        type: SET_USER_DATA,
        data: {id, login, email}

    } as const

)

export const getAuthUserDataTC = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export default authReducer;

