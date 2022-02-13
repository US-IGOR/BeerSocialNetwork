import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";


export const NavBar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.activeLink}>Messages</NavLink>

            </div>

            <div className={s.item}>
                <NavLink to='/top10' activeClassName={s.activeLink}>Top #10</NavLink>
            </div>



            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
        {/*

            <div className={s.item}>
                <NavLink to='/what'>What new?</NavLink>
            </div>

            <div className={s.item}>
                <a href='/review'>Review</a>
            </div>

            <div className={s.item}>
                <a href='/recipe'>Recipe</a>
            </div>

*/}

        </nav>
    )
}