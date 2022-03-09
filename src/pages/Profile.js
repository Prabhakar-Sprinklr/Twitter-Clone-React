import React, { Fragment, useState } from 'react';
import FriendListContainer from '../components/profile/FriendListContainer/FriendListContainer';
import Header from '../components/common/Header/Header';
import ProfileInformation from '../components/profile/ProfileInformation/ProfileInformation';
import "../components/profile/Profile.css";

function Profile() {

  const [viewState,setViewState] = useState("grid");

  //Should be an arrow function
  //--------------------------------------------------------------------------------------------------------------------------------
  function toggleState(){
    if(viewState==="grid")
      setViewState("list");
    else
      setViewState("grid");
  };

  let grid = (viewState==="grid");

  return (
    <Fragment>
    <Header toggleButton={true} viewState={viewState} toggleFunction={toggleState} />
    <div className="profile-home-container">
      <ProfileInformation></ProfileInformation>
      <FriendListContainer grid={grid}></FriendListContainer>
    </div>
    </Fragment>
  );
}

export default Profile;
