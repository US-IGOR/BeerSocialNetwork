import {Redirect} from "react-router-dom";
import Messages from "../components/Messages/Messages";
import React from "react";

export let withAuthRedirect = (Component:any) => {

    let RedirectComponent = (props:any) => {
        if (!props.isAuth)  return <Redirect to={'login'}/>
        return <Component {...props}/>
    }
    return RedirectComponent
}