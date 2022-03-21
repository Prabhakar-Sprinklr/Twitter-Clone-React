import {ACTIONS} from "../../data/constants";
const reducer = (state, action)=>{

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
            user2_entity.followers.push(
                {
                    userhandle:user1,
                    username:user1_entity.username,
                    profilepic:user1_entity.profilepic,
                }
            );
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
            user2_entity.followers = user2_entity.followers.filter((follower)=>(follower.userhandle!==user1));
            return [...(state.filter((user)=>(user.userhandle!==user1 && user.userhandle!==user2))),user1_entity,user2_entity];
            }
        default: return state;
    }
};

export default reducer;