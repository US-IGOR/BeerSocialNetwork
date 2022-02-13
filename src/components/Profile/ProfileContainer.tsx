import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
            //    debugger
                this.props.setUserProfile(response.data);

            })

    }


    render() {
        {
          //  debugger
        }
        return (<Profile
            {...this.props}
          props={this.props.profile}
        />)

    }

}

let mapStateToProps = (state: any) => ({
   profile: state.postPage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
