import React, { Fragment } from 'react';
import FriendListContainer from '../components/FriendListContainer';
import Header from '../components/Header';
import ProfileInformation from '../components/ProfileInformation';
import '../styles/Profile.css';

function Profile() {
  return (
    <Fragment>
    <Header></Header>
    <div className="profile-home-container">
      <ProfileInformation></ProfileInformation>
      <FriendListContainer></FriendListContainer>
    </div>
    </Fragment>
  );
}

export default Profile;
