import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "../../ProfileStatus";



type ProfileInfoType = {
    profile: any
}


export const ProfileInfo = (props:ProfileInfoType) => {
  //  if (props.profile == null || props.profile)
    debugger
   if (!props.profile)
  {
      return <Preloader/>
 } else {
       return (
           <div>
               {/*      <div>
                   <img
                       src='https://topspiski.com/wp-content/uploads/2018/01/1_drunk-robotos-poster-01447651416-700x393.jpg'/>

               </div>*/}
               <div className={s.avaDiscription}>
                   <img src={props.profile.photos.small}/>

                   <ProfileStatus status={props.profile.status}/>

                   <div>
                       <div>ФИО: {props.profile.fullName}</div>
                       <div>Обо мне: {props.profile.aboutMe}</div>
                       <div>Контакты:</div>
                       <div>facebook: {props.profile.contacts.facebook}</div>
                       <div>vk: {props.profile.contacts.vk}</div>
                       <div>twitter: {props.profile.contacts.twitter}</div>

                   </div>

               </div>
           </div>
       );
   }


}