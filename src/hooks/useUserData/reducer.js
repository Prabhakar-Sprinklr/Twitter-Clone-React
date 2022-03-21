import {ACTIONS} from "../../data/constants";
const reducer = (state, action)=>{

    const getUser = (userhandle)=>(
        state.find((user)=>(user.userhandle===userhandle))
    )

    switch(action.type){
        case ACTIONS.FOLLOW:{
            const currentUser = action.payload.user1,
                follower = action.payload.user2;
            const currentUser_entity = getUser(currentUser),
                follower_entity = getUser(follower);
            currentUser_entity.following.push(follower);
            follower_entity.followers.push(
                {
                    userhandle:currentUser,
                    username:currentUser_entity.username,
                    profilepic:currentUser_entity.profilepic,
                }
            );
            return [...(state.filter((user)=>(user.userhandle!==currentUser && user.userhandle!==follower))),currentUser_entity,follower_entity];
            }
        case ACTIONS.UNFOLLOW:{
            const currentUser = action.payload.user1,
                follower = action.payload.user2;
            const currentUser_entity = getUser(currentUser),
                follower_entity = getUser(follower);
            currentUser_entity.following = currentUser_entity.following.filter((userhandle)=>(userhandle!==follower));
            follower_entity.followers = follower_entity.followers.filter((follower)=>(follower.userhandle!==currentUser));
            return [...(state.filter((user)=>(user.userhandle!==currentUser && user.userhandle!==follower))),currentUser_entity,follower_entity];
            }
        default: return state;
    }
};

export default reducer;