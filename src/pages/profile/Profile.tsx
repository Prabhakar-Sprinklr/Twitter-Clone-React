import React, { Fragment, useState } from 'react';
import FriendListContainer from './components/friendList';
import Header from '../../components/header';
import ProfileInformation from './components/profileInformation';
import "./profile.css";

function Profile() : JSX.Element {

  const [isGrid,setIsGrid] = useState<boolean>(true);

  const toggleState = ()=>{
    setIsGrid((prevState)=>(!prevState));
  };

  return (
    <Fragment>
    <Header shouldShowToggleButton={true} isGrid={isGrid} toggleView={toggleState} />
    <div className="home-container profile-home-container">
      <ProfileInformation/>
      <FriendListContainer isGrid={isGrid}/>
    </div>
    </Fragment>
  );
}

export default Profile;
