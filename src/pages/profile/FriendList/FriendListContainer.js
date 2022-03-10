import React, { useState } from 'react'
import { 
  FriendList,
  getFollowers,
} from '.';

const userhandle = "userhandle";
// Not a derived constant hence out of function

function FriendListContainer({grid}) {

  const [followersList,setFollowersList] = useState(getFollowers(userhandle));

  // useEffect(()=>{
  //     setFollowersList(getFollowers(userhandle));
  // },[]);

  return (
        <FriendList grid={grid} followers={followersList}/>
  )
}

export default FriendListContainer