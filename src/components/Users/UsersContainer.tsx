import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, userType} from "../../Redux/UsersReducer";


type mapStateToPropsType = {
    users: Array<userType>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<userType>) => void,
}

export type UsersPropsType = mapStateToPropsType &  mapDispatchToPropsType



let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },

        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);