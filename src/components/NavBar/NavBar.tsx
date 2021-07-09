import React from "react";
import s from "./NavBar.module.css";
console.log(s);

export const NavBar = () => {
    return (

        <nav className={s.nav}>
            <div className= {`${s.item} ${s.active}`}>Profile</div>
            <div className={s.item}>What new?</div>
            <div className={s.item}>Messages</div>
            <div className={s.item}>Review</div>
            <div className={s.item}>Recipe</div>
            <div className={s.item}>Rating top #10</div>
        </nav>
    )
}