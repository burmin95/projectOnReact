import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
        <ProfileInfo />
        <MyPosts postData={props.profilePage.postData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updatePostText={props.updatePostText} />
    </div>

  )
}
export default Profile;