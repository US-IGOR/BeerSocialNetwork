import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect, useDispatch} from 'react-redux';
import {getAuthUserDataTC, setAuthUserData} from "../../Redux/AuthRedicer";
import {RootStateType} from "../../Redux/Store";
import {authAPI} from "../../api/api";


type MSTPStateType = {
    isAuth: boolean,
    login: string | null
}


type MSTPType = {
    isAuth: any
    login: any
}
type MDTPType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}
type PropsType = MSTPType & MDTPType


const HeaderContainer = (props: PropsType) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [])


    return (
        <Header data={props}/>
    )
}

const MapStateToProps = (state: RootStateType): MSTPStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)