import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    data?: string;
    qtyLike?: number;
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
               <img
                    src='https://avatars.mds.yandex.net/get-zen_doc/987771/pub_5d7561510a451800aee1129d_5d75619f3639e600ac3f0c80/scale_1200'/>
                <span>{props.data}</span>
            </div>
            <div>
                <span className={s.like}>{props.qtyLike} like's</span>
            </div>

        </div>
    )
}