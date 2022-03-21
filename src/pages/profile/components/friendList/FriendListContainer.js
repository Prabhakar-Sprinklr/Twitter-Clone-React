import React, { useCallback , useMemo } from 'react'
import FriendList from './FriendList';
import useUserData from '../../../../hooks/useUserData';
import { ACTIONS } from '../../../../data/constants';

const userhandle = "userhandle";

function FriendListContainer({isGrid}) {

  const {dispatch,getFollowerList} = useUserData();

  const followersList = useMemo(()=>getFollowerList(userhandle),[getFollowerList]) ;

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
        <FriendList isGrid={isGrid} followers={followersList} toggleFollowing={toggleFollowing} />
  );
}

export default FriendListContainer;