import React from "react";
//Messages-DialogItem
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";

export type PropsTypeDialogItem = {
    data: Array<TypeArraymessagesDataUsers>
}

type TypeArraymessagesDataUsers = {
    id: number
    name: string
}

export const DialogItem = (props: PropsTypeDialogItem) => {
    let messagesUsers = props.data.map(d =>
        <div className={s.dialog}>
            <NavLink to={'/messges/' + d.id}>{d.name}</NavLink>
        </div>)

    return (
        <div>
            {messagesUsers}
        </div>
    )
};
