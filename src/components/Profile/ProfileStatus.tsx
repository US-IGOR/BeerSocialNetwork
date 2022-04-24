import React, {useState} from "react";

type ProfileStatusType = {
    status: string
}


/*

class ProfileStatus extends React.Component<any> {
    state = {editMode: true}

    render() {

        return  ( <div>
            {!this.state.editMode &&
            <div>
                <span>{this.props.status}  </span>
            </div>}

            {this.state.editMode &&
            <div>
                <input value={this.props.status}/>
            </div>}
        </div>)

    }

}
*/



export const ProfileStatus = (props: ProfileStatusType) => {

    const changeStatusHandler = () => {
        setShowStatus(!showStatus)
    }

    const [showStatus, setShowStatus] = useState(true)
    return <div>
        {showStatus
            ?  <div>    <span onDoubleClick={()=>{changeStatusHandler()}} >{props.status}  </span> </div>
            : <div>  <input  onBlur={()=>{changeStatusHandler()}} autoFocus={true} value={props.status}/> </div>}
    </div>
}
