import userPhoto from "../../assets/images/users1.png";
import {NavLink} from "react-router-dom";
import styles from "./Users.module.css";
import React from "react";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>

            <span>
                <div>
                    <NavLink to='/profile/'>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>

                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)}
                                  onClick={() => { props.unfollow(u.id)}
                                  }>Unfollow</button>

                        : <button disabled={props.followingInProgress
                            .some(id => id === u.id)}
                                  onClick={() => { props.follow(u.id)}
                                  }>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>

                </div>
            )}
        </div>
    )
}

export default Users;