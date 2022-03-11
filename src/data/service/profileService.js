import data from '../data';
import {getUserEntity,getUserEntityShort,doFollow} from "./userService";

data.init();

export const getFollowers = (userhandle)=>{
    let followers_list = [];
    for(let user of getUserEntity(userhandle).followers){
        let follower_entity=getUserEntityShort(user);
        const isFollowing=doFollow(userhandle,user);
        follower_entity={...follower_entity,following:isFollowing};
        followers_list.push(follower_entity);
    }
    return followers_list;
}

export const takeAction = ({user1,user2,task})=>{
    if(task==="Follow")
        data.addFollower(user1,user2);
    else if(task==="Unfollow")
        data.removeFollower(user1,user2);
    else return;
    data.saveUserDataToLocal();
}

