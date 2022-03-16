import React from 'react'
import FriendList from './FriendList';
import useUserData from '../../../../hooks/useUserData';
import { ACTIONS } from '../../../../data/constants';

const userhandle = "userhandle";

function FriendListContainer({grid}) {

  const [_,dispatch,getUserEntity,getFollowerList,isFollowing] = useUserData();

  let followersList=[];

  const followers = getFollowerList(userhandle);
  for(let follower of followers){
    followersList.push({
      userEntity:getUserEntity(follower),
      isFollowing:isFollowing(userhandle,follower)
    });
  }

  const toggleFollowing = (followerid,currentFollowing)=>{
    let action = {type:ACTIONS.FOLLOW,
                  payload:{
                    user1:userhandle,
                    user2:followerid,
                  }};
    if(currentFollowing)
      action.type=ACTIONS.UNFOLLOW;
    dispatch(action);
  };

  return (
        <FriendList grid={grid} followers={followersList} toggleFollowing={toggleFollowing} />
  );
}

export default FriendListContainer;