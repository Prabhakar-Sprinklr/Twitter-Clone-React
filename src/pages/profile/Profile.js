import React, { Fragment, useState } from 'react';
import { 
  FriendListContainer,
  Header,
  ProfileInformation,
} from '.';
import "./Profile.css";

function Profile() {

  const [viewState,setViewState] = useState("grid");

  const toggleState = ()=>{
    if(viewState==="grid")
      setViewState("list");
    else
      setViewState("grid");
  };

  const grid = (viewState==="grid");

  return (
    <Fragment>
    <Header toggleButton={true} viewState={viewState} toggleFunction={toggleState} />
    <div className="home-container profile-home-container">
      <ProfileInformation></ProfileInformation>
      <FriendListContainer grid={grid}></FriendListContainer>
    </div>
    </Fragment>
  );
}

export default Profile;
