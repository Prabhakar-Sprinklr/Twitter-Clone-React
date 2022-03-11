import React, { useState } from 'react'
import { 
  FriendList,
  getFollowers,
} from '.';

const userhandle = "userhandle";

function FriendListContainer({grid}) {

  const [followersList,setFollowersList] = useState(getFollowers(userhandle));

  return (
        <FriendList grid={grid} followers={followersList}/>
  )
}

export default FriendListContainer