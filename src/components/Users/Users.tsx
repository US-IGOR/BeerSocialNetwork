import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './users.module.css';
import {ava1, ava2, ava3, ava4} from "../../Redux/UsersReducer";

export const Users = (props: UsersPropsType) => {

if (props.users.length === 0) {
    props.setUsers(
        [
            {id: 1, followed: false, fullName: 'Roma', status: 'Zefirkus',
                location: {country: 'Belarus', city: 'Minsk'},
                photoUrl: ava1},
            {id: 2, followed: true, fullName: 'Evgenia', status: 'ZlukaDudukaBarbidoskaia',
                location: {country: 'Belarus', city: 'Minsk'}  , photoUrl:  ava2    },
            {id: 3, followed: true, fullName: 'Igor', status: 'Bubus9ka',
                location: {country: 'Belarus', city: 'Minsk'}, photoUrl:ava3},
            {id: 4, followed: false, fullName: 'Leo', status: 'Miay',
                location: {country: 'Belarus', city: 'Minsk'}, photoUrl: ava4},

        ]
    )
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
                            <div>{m.fullName}</div>
                            <div>{m.status}</div>
                        </div>
                        <span>
<div>
    {m.location.country}
</div>
<div>
    {m.location.city}
</div>

        </span>

                    </div>


                </div>)
            }

        </div>
    )
}