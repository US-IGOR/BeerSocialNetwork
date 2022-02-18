import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {
    follow,
    setCurrentPage, setIsFetching, setIsFetchingProgress,
    setTotalUsersCount,
    setUsers,
    unfollow,
    userType
} from "../../Redux/UsersReducer";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapStateToPropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<userType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    setIsFetching: (isFetching: boolean) => void,

}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


class UserContainer extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    changedCurrentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);

        usersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(
                    data.items
                )
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                changedCurrentPageHandler={this.changedCurrentPageHandler}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unfollow}
                setIsFetchingProgress={this.props.setIsFetchingProgress}
                followingInProgress={this.props.followingInProgress}
            />

        </>

    }
}

//second container component, class type


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }


    }
}*/


export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching,setIsFetchingProgress})(UserContainer);