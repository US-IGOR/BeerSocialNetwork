import React from "react";
import s from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";


export const Profile = () => {
    return (
        <div className={s.content}>
            <img
/*
                src='https://previews.123rf.com/images/silvek/silvek1206/silvek120600002/13964136-background-of-beer-bubbles-in-a-vector-format.jpg'/>
*/
   /*         src='https://img.freepik.com/free-vector/beer-light-white-background-set-different-sorts-glass-illustration_1284-51531.jpg?size=626&ext=jpg'/>*/

                src='https://image.shutterstock.com/z/stock-vector-set-of-beer-poster-in-vintage-style-with-grunge-textures-and-beer-objects-vector-illustration-1060350398.jpg'/>

            <div className={s.item}>
                ava+description
            </div>
            <MyPost/>
        </div>
    )
}