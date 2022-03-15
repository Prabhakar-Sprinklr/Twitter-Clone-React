import data from "../data";
import {getUserEntity} from "./userService";

data.init();

export const getAllTweet = ()=>{
    console.log("Tweet Retieved from DB !");
    if(data.tweet_collection_list!==undefined) return data.tweet_collection_list;
    data.tweet_collection_list=[];
    for(let [key,value] of data.tweet_collection.entries()){
        let userid=value.userhandle,
            id=key,
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
    data.tweet_collection_list.sort(function(a, b) {return b.timestamp - a.timestamp;});
    return data.tweet_collection_list;
}

const addTweet = ({userhandle,tweet_text,imageName}) => {
    let timestamp = Date.now();
    let unique_id=userhandle+"-"+timestamp+"-0";
    const response = data.addTweet({
            unique_id:unique_id,
            content:{
                userhandle:userhandle,
                text:tweet_text,
                timestamp:timestamp,
                image:imageName,
            },
        });
    return response;
}

export const addNewTweet = ({userhandle,tweet_text,imageName})=>{
    let tweet_length = tweet_text.length;
    if(tweet_length<=5){
        alert("Tweet Text too short !");
        return {response:false};
    }
    else if(tweet_length>100){
        alert("Too large a tweet !");
        return {response:false};
    }
    const tweet_response = addTweet({userhandle,tweet_text,imageName});
    return {response:true, tweet_entity : tweet_response};
}

export const deleteTweet = (id)=>{
    if (window.confirm("Do you want to delete the tweet ?") === true){
        data.deleteTweet(id);
        return true;
    }
    return false;
}

export const editTweet = (id,tweet_text,imageName)=>{
    data.editTweet({id,tweet_text,imageName});
}
