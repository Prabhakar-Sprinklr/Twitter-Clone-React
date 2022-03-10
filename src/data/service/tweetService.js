import data from "../data";
import {getUserEntity} from "./userService";

console.log("Calling data init from tweetService");
data.init();

export const getAllTweet = ()=>{
    if(data.tweet_collection_list!==undefined) return data.tweet_collection_list;
    data.tweet_collection_list=[];
    for(let [key,value] of data.tweet_collection.entries()){
        let userid=value.userhandle,
            id=key,
            // user_entity=data.user_data.get(userid),
            user_entity=getUserEntity(userid),
            username=user_entity.username,
            profilepic=user_entity.profilepic,
            text=value.text,
            image=value.image,
            timestamp=value.timestamp;
        data.tweet_collection_list.push({
            id:id,
            username:username,
            userid:userid,
            profilepic:profilepic,
            text:text,
            image:image,
            timestamp:timestamp,
        });
    }
    console.log("Sort called");
    data.tweet_collection_list.sort(function(a, b) {return b.timestamp - a.timestamp;});
    return data.tweet_collection_list;
}