import React, { Fragment, useState } from 'react';
import FriendListContainer from './components/friendList';
import Header from '../../components/header';
import ProfileInformation from './components/profileInformation';
import "./profile.css";

function Profile() {

  const [viewState,setViewState] = useState("grid");

  const toggleState = ()=>{
    if(viewState==="grid")
      setViewState("list");
    else
      setViewState("grid");
  };

  const isGrid = (viewState==="grid");

  return (
    <Fragment>
    <Header toggleButton={true} viewState={viewState} toggleFunction={toggleState} />
    <div className="home-container profile-home-container">
      <ProfileInformation/>
      <FriendListContainer grid={isGrid}/>
    </div>
    </Fragment>
  );
}

export default Profile;
