import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './users.module.css';
import {ava1, ava2, ava3, ava4} from "../../Redux/UsersReducer";
import axios from "axios";

export const Users = (props: UsersPropsType) => {

if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(
            response.data.items
        )

    })


}


    return (

        <div>
            {
                props.users.map(m => <div key={m.id}>
                    <div>
                        <div>
                            <img src={m.photoUrl} className={style.userPhoto}/>
                        </div>
                        <div>
                            {m.followed
                                ? <button onClick={() => {
                                    props.unFollow(m.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(m.id)
                                }}>Follow</button>}

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </div>
                        <span>
<div>
    {'m.location.country'}
</div>
<div>
    {'m.location.city'}
</div>

        </span>

                    </div>


                </div>)
            }

        </div>
    )
}