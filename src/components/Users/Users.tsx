import React from "react";
import style from './users.module.css';
import userPhoto from "../../assets/images/nullUser.jpg"
import {userType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type usersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: number
    changedCurrentPageHandler: (p: number) => void
    users: Array<userType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setIsFetchingProgress: (followingInProgress: boolean, id: number) => void
    followingInProgress: []

}

export const Users = (props: usersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? style.selectedPage : ''}
                                 onClick={() => {
                                     props.changedCurrentPageHandler(p)
                                 }}
                    >{p + ','}</span>
                })}
            </div>
            {

                props.users.map(m => <div key={m.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + m.id}>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                                     className={style.userPhoto} alt={'img not found'}/>
                            </NavLink>
                        </div>
                        <div>
                            {m.followed
                                ? <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={() => {
                                    props.unFollow(m.id)

                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={() => {
                                    props.follow(m.id)

                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}