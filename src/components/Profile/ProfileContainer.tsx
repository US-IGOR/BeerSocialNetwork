import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

import {RootStateType} from "../../Redux/Store";

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
type ProfileType =  null | {

    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: contactsType
    photos?: photosType
}

type MSTPType = {
    profile:ProfileType
}
type MDTPType = {
    setUserProfile: (profile:ProfileType)=>void
}
type OwnPropsType = MSTPType & MDTPType
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

console.log('test')

debugger
function ProfileContainer(props: PropsType) {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        debugger
        ;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data)
            })
        debugger
    }, [])
    debugger
    return (
        <Profile profile={props.profile}/>
    )
}
debugger
let mapStateToProps = (state: RootStateType):MSTPType => ({
    profile: state.postPage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
debugger

/*

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        {
        }
        return (<Profile
            {...this.props}
            props={this.props.profile}
        />)
    }
}
*/
