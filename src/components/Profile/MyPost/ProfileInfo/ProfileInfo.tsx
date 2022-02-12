import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader/Preloader";


export const ProfileInfo = (props:any) => {
    if (props.profile == null || props.profile)

    console.log(props.profile)

    // if (!props.profile)
    {
        return <Preloader/>
    }

debugger
    return (
        <div>
            <div>
                <img
                    src='https://topspiski.com/wp-content/uploads/2018/01/1_drunk-robotos-poster-01447651416-700x393.jpg'/>

            </div>
               <div className={s.avaDiscription}>
              <img src={props.profile.photos.large}/>

            </div>
        </div>
    )
}