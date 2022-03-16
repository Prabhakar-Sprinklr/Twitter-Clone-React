import { useCallback, useEffect, useReducer } from "react";
import { INIT_USER_LIST } from "../../data/constants";
import {ACTIONS} from "../../data/constants";

const useUserData1 = ()=>{

    const reducer = useCallback((state, action)=>{

        const getUser = (userhandle)=>(
            state.find((user)=>(user.userhandle===userhandle))
        )

        switch(action.type){
            case ACTIONS.FOLLOW:{
                //user1 should follow user2
                //add user2 in following of user1
                //add user1 in followers of user2
                const user1 = action.payload.user1;
                const user2 = action.payload.user2;
                const user1_entity = getUser(action.payload.user1);
                const user2_entity = getUser(action.payload.user2);
                user1_entity.following.push(user2);
                user2_entity.followers.push(user1);
                return [...(state.filter((user)=>(user.userhandle!==user1 && user.userhandle!==user2))),user1_entity,user2_entity];
                }
            case ACTIONS.UNFOLLOW:{
                //user1 should unfollow user2
                //remove user2 from following of user1
                //remove user1 from followers of user2
                const user1 = action.payload.user1;
                const user2 = action.payload.user2;
                const user1_entity = getUser(action.payload.user1);
                const user2_entity = getUser(action.payload.user2);
                user1_entity.following = user1_entity.following.filter((userhandle)=>(userhandle!==user2));
                user2_entity.followers = user2_entity.followers.filter((userhandle)=>(userhandle!==user1));
                return [...(state.filter((user)=>(user.userhandle!==user1 && user.userhandle!==user2))),user1_entity,user2_entity];
                }
            default: return state;
        }
    },[]);

    const [userList, dispatch] = useReducer(reducer,localStorage.userListLocal?JSON.parse(localStorage.userListLocal):INIT_USER_LIST)

    const getUserEntity = useCallback((userhandle)=>(
        userList.find((user)=>(user.userhandle===userhandle))
    ),[userList]);

    const getFollowersList = useCallback((userhandle)=>(getUserEntity(userhandle).followers),[getUserEntity]);

    const isFollowing = useCallback((user1,user2)=>{
        const user_entity = getUserEntity(user1);
        if(user_entity.following.find((follower)=>(follower===user2)))
            return true;
        return false;
    },[getUserEntity]);

    useEffect(()=>{
        localStorage.userListLocal = JSON.stringify(userList);
    },[userList]);

    return [userList,dispatch,getUserEntity,getFollowersList,isFollowing];

};

export default useUserData1;