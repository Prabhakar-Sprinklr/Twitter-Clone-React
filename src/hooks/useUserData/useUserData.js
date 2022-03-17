import { useCallback } from "react";
import { INIT_USER_LIST } from "../../data/constants";
import reducer from "./reducer";
import useLocalStorage from "../useLocalStorage";

const useUserData = ()=>{

    const [userList, dispatch] = useLocalStorage("userListLocal",INIT_USER_LIST,reducer);

    const getUserEntity = useCallback((userhandle)=>(
        userList.find((user)=>(user.userhandle === userhandle))
    ),[userList]);

    const getFollowerList = useCallback((userhandle)=>(getUserEntity(userhandle).followers),[getUserEntity]);

    const isFollowing = useCallback((user1,user2)=>{
        const user_entity = getUserEntity(user1);
        if(user_entity.following.find((follower)=>(follower === user2)))
            return true;
        return false;
    },[getUserEntity]);

    return {userList,dispatch,getUserEntity,getFollowerList,isFollowing};

};

export default useUserData;