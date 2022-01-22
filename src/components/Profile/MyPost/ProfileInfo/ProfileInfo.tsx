import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            --[ProfileInfo]--
            <div>
                <img
                    src='https://topspiski.com/wp-content/uploads/2018/01/1_drunk-robotos-poster-01447651416-700x393.jpg'/>

            </div>
               <div className={s.avaDiscription}>
                Bender
            </div>
            --[ProfileInfo]--
        </div>
    )
}