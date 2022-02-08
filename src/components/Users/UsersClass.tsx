import React, {MouseEventHandler} from "react";
import style from './users.module.css';
import axios from "axios";
import userPhoto from "../../assets/images/nullUser.jpg"

export class Users extends React.Component<any> {

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

    changedCurrentPageHandler = (p:number) => {
        this.props.setCurrentPage (p)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(
                    response.data.items
                )
            })

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        return <div>

            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? style.selectedPage : ''}
                                 onClick={(e)=>{ this.changedCurrentPageHandler (p)}}
                    >{p + ','}</span>
                })}
            </div>
            {
                // @ts-ignore
                this.props.users.map(m => <div key={m.id}>
                    <div>
                        <div>
                            <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                                 className={style.userPhoto}/>
                        </div>
                        <div>
                            {m.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(m.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(m.id)
                                }}>Follow</button>}

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </div>
                        <span>
{/*<div>
    {'m.location.country'}
</div>
<div>
    {'m.location.city'}
</div>*/}

        </span>

                    </div>


                </div>)
            }

        </div>


    }
}