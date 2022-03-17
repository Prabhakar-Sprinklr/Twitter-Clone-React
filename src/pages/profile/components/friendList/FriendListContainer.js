import React, { useCallback , useMemo } from 'react'
import FriendList from './FriendList';
import useUserData from '../../../../hooks/useUserData';
import { ACTIONS } from '../../../../data/constants';

const userhandle = "userhandle";

function FriendListContainer({grid}) {

  const {dispatch,getUserEntity,getFollowerList,isFollowing} = useUserData();

  const followersList = useMemo(()=>{
    const followers = getFollowerList(userhandle);
    return followers.map((follower)=>(
      {
        userEntity:getUserEntity(follower),
        isFollowing:isFollowing(userhandle,follower),
      }
    ));
  },[getFollowerList,getUserEntity,isFollowing]);

  const toggleFollowing = useCallback((followerid,currentFollowing)=>{
    let action = {
      type:ACTIONS.FOLLOW,
      payload:{
        user1:userhandle,
        user2:followerid,
      }};
    if(currentFollowing)
      action.type=ACTIONS.UNFOLLOW;
    dispatch(action);
  },[dispatch]);

  return (
        <FriendList grid={grid} followers={followersList} toggleFollowing={toggleFollowing} />
  );
}

export default FriendListContainer;