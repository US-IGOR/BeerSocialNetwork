import React, {useEffect} from "react";
import style from './users.module.css';
import userPhoto from "../../assets/images/nullUser.jpg"
import {unfollow, userType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type usersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: number
    changedCurrentPageHandler: (p: number) => void
    users: Array<userType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    //isFetching:boolean
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
                                 onClick={(e) => {
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
                                     className={style.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {m.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'b3a9a9e4-0bf1-4009-8ba9-a298b1b9d232'
                                            }
                                        },
                                    )
                                        .then(response => {
                                            if (response.data.resultCode ===0) {
                                                props.unFollow(m.id)
                                            }
                                        })

                                }}>Unfollow</button>

                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {},
                                        {withCredentials: true,
                                            headers: {
                                                'API-KEY': 'b3a9a9e4-0bf1-4009-8ba9-a298b1b9d232'
                                            }})
                                        .then(response => {

                                            if (response.data.resultCode === 0) {
                                                props.follow(m.id)
                                            }
                                        })

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