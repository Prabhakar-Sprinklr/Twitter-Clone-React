import React from 'react'
import {getFollowers} from "../../../../data/service/profileService";
import FriendList from './FriendList'

const userhandle = "userhandle";

function FriendListContainer({grid}) {

  const followersList = getFollowers(userhandle);

  return (
        <FriendList grid={grid} followers={followersList}/>
  )
}

export default FriendListContainer