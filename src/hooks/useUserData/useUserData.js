import { useCallback } from "react";
import { INIT_USER_LIST } from "../../data/constants";
import reducer from "./reducer";
import useLocalStorage from "../useLocalStorage";

const useUserData = ()=>{

    const [userList, dispatch] = useLocalStorage("userListLocal",INIT_USER_LIST,reducer);

    const getFollowerList = useCallback((userhandle)=>{
        const userEntity = userList.find((user)=>(user.userhandle === userhandle));
        const followingList = userEntity.following;
        const followersList = userEntity.followers;
        const isFollowing = (followerUserhandle)=>{
            if(followingList.find((follower)=>(follower===followerUserhandle)))
                return true;
            return false;
        }
        return followersList.map((follower)=>({
            follower,
            isFollowing:isFollowing(follower.userhandle),
        }));
    },[userList]);

    return {dispatch,getFollowerList};

};

export default useUserData;