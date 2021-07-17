//Messages-MessagesText
import s from "../Messages.module.css";
import React from "react";

type PropsTypeMessagesText = {
    message: string
}
export const MessagesText = (props: PropsTypeMessagesText) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>

    )
};
