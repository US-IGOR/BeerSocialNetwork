import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {Users} from "./UsersClass";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../Redux/UsersReducer";


type mapStateToPropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<userType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
}

export type UsersPropsType = mapStateToPropsType &  mapDispatchToPropsType



let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);