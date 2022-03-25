import React, { useCallback , useMemo } from 'react'
import FriendList from './FriendList';
import { ACTIONS } from '../../../../data/constants';
import reducer from "./reducer";
import { INIT_USER } from '../../../../data/constants';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import { UserType } from './types';

const userhandle = "userhandle";

function FriendListContainer({isGrid}:{isGrid:boolean}) {

  const [user,dispatch] = useLocalStorage("userLocal",INIT_USER,reducer);

  const pureFollowersList = (user as UserType).followers ;
  const followingList = (user as UserType).following;

  const isFollowing = useCallback((followerUserhandle:string)=>{
    if(followingList.find((follower)=>(follower===followerUserhandle)))
        return true;
    return false;
  },[followingList]);

  const followersList = useMemo(()=>(
    pureFollowersList.map(follower => (
    {
        follower,
        isFollowing : isFollowing(follower.userhandle),
    }
  ))),[isFollowing,pureFollowersList]);

  const toggleFollowing = useCallback((followerid,currentFollowing)=>{
    let action = {
      type:ACTIONS.FOLLOW,
      payload:{
        user1:userhandle,
        user2:followerid,
      }};
    if(currentFollowing)
      action.type=ACTIONS.UNFOLLOW;
    (dispatch as React.Dispatch<object>)(action);
  },[dispatch]);

  return (
        <FriendList isGrid={isGrid} followers={followersList} toggleFollowing={toggleFollowing} />
  );
}

export default FriendListContainer;