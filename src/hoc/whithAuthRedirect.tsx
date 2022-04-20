import {Redirect} from "react-router-dom";
import Messages from "../components/Messages/Messages";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state:any) => ( {
    isAuth: state.auth.isAuth
} )


export let withAuthRedirect = (Component:any) => {

    let RedirectComponent = (props:any) => {
        if (!props.isAuth)  return <Redirect to={'login'}/>
        return <Component {...props}/>
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
}