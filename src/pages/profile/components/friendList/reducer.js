import {ACTIONS} from "../../../../data/constants";
const reducer = (state, action)=>{

    switch(action.type){
        case ACTIONS.FOLLOW:{
            const follower = action.payload.user2;
            const following = [...state.following,follower];
            return {...state,following}
            }
        case ACTIONS.UNFOLLOW:{
            const follower = action.payload.user2;
            const following = state.following.filter((userhandle)=>(userhandle!==follower));
            return {...state, following};
            }
        default: return state;
    }
};

export default reducer;