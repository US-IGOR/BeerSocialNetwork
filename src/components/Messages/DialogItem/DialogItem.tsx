import React from "react";
//Messages-DialogItem
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";


type propsTypeDialogItem={
    messagesDataUsers: Array <typeArrayPropsTypeDialogItem>
}
type typeArrayPropsTypeDialogItem = {
    id:number
    name: string
}



export type PropsTypeDialogItem = {
    data: Array<TypeArraymessagesDataUsers>
}

type TypeArraymessagesDataUsers = {
    id: number
    name: string
}

export const DialogItem = (props: propsTypeDialogItem) => {
    let messagesUsers = props.messagesDataUsers.map(d =>
        <div className={s.dialog}>
            --[DialogItem]--
            <NavLink to={'/messges/' + d.id}>{d.name}</NavLink>

        </div>)

    return (
        <div>
            {messagesUsers}
        </div>
    )
};
