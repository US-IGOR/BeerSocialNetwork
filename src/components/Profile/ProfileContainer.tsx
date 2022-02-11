import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";


class ProfileContainer extends React.Component<any> {

     componentDidMount() {

         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
             .then(response => {
                 this.props.setUserProfile(response.data);
             })
         console.log(this.props.profile)
     }


     render () {

       return (
           <div>
               --[Profile]--

               <Profile  {...this.props} profile={  this.props.profile}  />

               {
                   console.log(this.props.profile)
               }
           </div>
       )

   }

}

let mapStateToProps = (state:any) => ({
    profile: state.profile
})


export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)
