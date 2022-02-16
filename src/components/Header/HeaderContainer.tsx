import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import { connect } from 'react-redux';
import {setAuthUserData} from "../../Redux/AuthRedicer";
import {RootStateType} from "../../Redux/Store";


type MSTPStateType = {
    isAuth:boolean,
    login:string | null
}


type MSTPType = {
        isAuth: any
        login: any
}
type MDTPType = {
    setAuthUserData: (id:number,login:string,email:string)=>void
}
type PropsType = MSTPType & MDTPType



const HeaderContainer = (props:PropsType )=> {

    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials:true})
            .then(response => {

              if (response.data.resultCode === 0) {

                  let {id,login,email} = response.data.data;
                  props.setAuthUserData(id,login,email)


              }
            })
    }, [])

    debugger
    return (
        <Header data={props}/>
    )
}

const MapStateToProps = (state:RootStateType ):MSTPStateType => ({
    isAuth: state.auth.isAuth ,
    login: state.auth.login
})

debugger
export default connect (MapStateToProps, {setAuthUserData}) (HeaderContainer)