import data from '../data';

export const getUserEntity = (userid)=>{
    return data.user_data.get(userid);
}

export const getUserEntityShort = (userid)=>{
    let full_entity=data.user_data.get(userid);;
    let short_entity={
        userhandle:full_entity.userhandle,
        username:full_entity.username,
        profilepic:full_entity.profilepic,
    }
    return short_entity;
}

export const getFollowerList = (user1)=>{
    return getUserEntity(user1).following;
}

export const doFollow = (user1,user2)=>{
    const follower_list = getFollowerList(user1);
    for(let follower of follower_list){
        if(follower===user2) return true;
    }
    return false;
}