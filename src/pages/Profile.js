import React, { Fragment, useState } from 'react';
import FriendListContainer from '../components/FriendListContainer';
import Header from '../components/Header';
import ProfileInformation from '../components/ProfileInformation';
import '../styles/Profile.css';

function Profile() {

  const [viewState,setViewState] = useState("grid");

  function toggleState(){
    if(viewState==="grid")
      setViewState("list");
    else
      setViewState("grid");
  };

  let grid = (viewState==="grid");

  return (
    <Fragment>
    <Header toggleButton={true} viewState={viewState} toggleFunction={toggleState}></Header>
    <div className="profile-home-container">
      <ProfileInformation></ProfileInformation>
      <FriendListContainer grid={grid}></FriendListContainer>
    </div>
    </Fragment>
  );
}

export default Profile;
