import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {RootStateType} from "../../Redux/Store";
import Messages from "../Messages/Messages";
import {withAuthRedirect} from "../../hoc/whithAuthRedirect";



type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type photosType = {
    small: string,
    large: string
}
type ProfileType = null | {

    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: contactsType
    photos?: photosType
}

type MSTPType = {
    profile?: ProfileType
    isAuth?: boolean
}
type MDTPType = {
    setUserProfile?: (profile: ProfileType) => void
}
type OwnPropsType = MSTPType & MDTPType
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export function     ProfileContainer(props: PropsType) {
const dispatch = useDispatch()
    useEffect(() => {
        let userId = props.match.params.userId;
        dispatch (getUserProfile(Number(userId)))
    }, [])
    return (
        <Profile profile={props.profile} isAuth={props.isAuth}/>
    )
}


let AuthRedirectComponent = withAuthRedirect (ProfileContainer)


let mapStateToProps = (state: RootStateType): MSTPType => ({
    profile: state.postPage.profile
})
let mapStateToPropsForRiderect = (state: RootStateType): MSTPType => ({
    isAuth: state.auth.isAuth
})


AuthRedirectComponent=connect(mapStateToPropsForRiderect)(AuthRedirectComponent)
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps)(WithUrlDataContainerComponent)




