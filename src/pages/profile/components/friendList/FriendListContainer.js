// import React, { useState , useEffect, useCallback } from 'react'
// import FriendList from './FriendList'

// const userhandle = "userhandle";


// function FriendListContainer({grid}) {
  
//   const getAllUsers = ()=>{
//     return JSON.parse(localStorage.userListLocal);
//   }

//   const [userList,setUserList] = useState(()=>getAllUsers());

//   const getUserEntity = useCallback((userhandle)=>{
//     for(let user of userList){
//       if(user.userhandle === userhandle)
//         return user;
//     }
//   },[userList]);

//   const isFollowing = (user_entity,userhandle)=>{
//     for(let user of user_entity.following){
//       if(user === userhandle)
//         return true;
//     }
//     return false;
//   };

//   let followersList=[];
//   const user_entity = getUserEntity(userhandle);
//   for(let follower of user_entity.followers){
//     followersList.push({
//       userEntity:getUserEntity(follower),
//       isFollowing:isFollowing(user_entity,follower)
//     });
//   }

//   const toggleFollowing = (followerid,currentFollowing)=>{
//     let tempUserList = [...userList];
//     if(currentFollowing){
//       //my User is currently following followerid
//       let user_entity;
//       for(user_entity of tempUserList){
//         if(user_entity.userhandle === userhandle){
//           user_entity.following = user_entity.following.filter((id)=>(id!==followerid))
//         }
//         if(user_entity.userhandle === followerid){
//           user_entity.followers = user_entity.followers.filter((id)=>(id!==userhandle));
//         }
//       }
//     }
//     else{
//       //my User is currenly not following followerid
//       let user_entity;
//       for(user_entity of tempUserList){
//         if(user_entity.userhandle === userhandle){
//           user_entity.following.push(followerid);
//         }
//         if(user_entity.userhandle === followerid){
//           user_entity.followers.push(userhandle);
//         }
//       }
//     }
//     setUserList(tempUserList);
//   }

//   useEffect(()=>{
//     localStorage.userListLocal = JSON.stringify(userList);
//   },[userList]);

//   return (
//         <FriendList grid={grid} followers={followersList} toggleFollowing={toggleFollowing}/>
//   )
// }

// export default FriendListContainer

import React, { useState , useEffect, useCallback } from 'react'
import FriendList from './FriendList'

const userhandle = "userhandle";

const isFollowing = (user_entity,userhandle)=>{
  for(let user of user_entity.following){
    if(user === userhandle)
      return true;
  }
  return false;
};

function FriendListContainer({grid}) {
  
  const getAllUsers = ()=>{
    return JSON.parse(localStorage.userListLocal);
  }

  const [userList,setUserList] = useState(()=>getAllUsers());

  const getUserEntity = useCallback((userhandle)=>{
    for(let user of userList){
      if(user.userhandle === userhandle)
        return user;
    }
  },[userList]);

  let followersList=[];

  const user_entity = getUserEntity(userhandle);
  for(let follower of user_entity.followers){
    followersList.push({
      userEntity:getUserEntity(follower),
      isFollowing:isFollowing(user_entity,follower)
    });
  }

  const toggleFollowing = (followerid,currentFollowing)=>{
    let tempUserList = [...userList];
    if(currentFollowing){
      //my User is currently following followerid
      let user_entity;
      for(user_entity of tempUserList){
        if(user_entity.userhandle === userhandle){
          user_entity.following = user_entity.following.filter((id)=>(id!==followerid))
        }
        if(user_entity.userhandle === followerid){
          user_entity.followers = user_entity.followers.filter((id)=>(id!==userhandle));
        }
      }
    }
    else{
      //my User is currenly not following followerid
      let user_entity;
      for(user_entity of tempUserList){
        if(user_entity.userhandle === userhandle){
          user_entity.following.push(followerid);
        }
        if(user_entity.userhandle === followerid){
          user_entity.followers.push(userhandle);
        }
      }
    }
    setUserList(tempUserList);
  };

  useEffect(()=>{
    localStorage.userListLocal = JSON.stringify(userList);
  },[userList]);

  return (
        <FriendList grid={grid} followers={followersList} toggleFollowing={toggleFollowing}/>
  )
}

export default FriendListContainer