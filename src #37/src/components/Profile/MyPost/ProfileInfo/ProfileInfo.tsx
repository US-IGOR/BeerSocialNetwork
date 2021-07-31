import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://image.shutterstock.com/z/stock-vector-set-of-beer-poster-in-vintage-style-with-grunge-textures-and-beer-objects-vector-illustration-1060350398.jpg'/>
            <div className={s.avaDiscription}>
                ava+description
            </div>
        </div>
    )
}