import {Redirect} from "react-router-dom";
import Messages from "../components/Messages/Messages";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/reduxStore";


type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state:AppStateType):mapStateToPropsForRedirectType => ( {
    isAuth: state.auth.isAuth
} )


export function withAuthRedirect<T>(Component:ComponentType<T>)  {


    let RedirectComponent = (props:mapStateToPropsForRedirectType) => {


        let {isAuth, ...restProps} = props
        if (!isAuth)  return <Redirect to={'login'}/>
        return <Component {...restProps as T}/>
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
}