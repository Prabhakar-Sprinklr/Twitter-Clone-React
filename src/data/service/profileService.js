import data from '../data';
import {getUserEntity,getUserEntityShort,doFollow} from "./userService";

console.log("Calling data init from Profile Service");
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