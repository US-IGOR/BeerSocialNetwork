import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
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


export class UsersAPIComponent extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    changedCurrentPageHandler = (p: number) => {
        this.props.setCurrentPage(p)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(
                    response.data.items
                )
            })
    }
    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            changedCurrentPageHandler={this.changedCurrentPageHandler}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }
} //second container component, class type



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



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);