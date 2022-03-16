import { useEffect, useState } from "react";
import { INIT_TWEET_LIST } from "../../data/constants";

const useTweetData = ()=>{
    const [tweetList, setTweetList] = useState(()=>(
        localStorage.tweetListLocal?JSON.parse(localStorage.tweetListLocal):INIT_TWEET_LIST
    ));

    useEffect(()=>{
        localStorage.tweetListLocal = JSON.stringify(tweetList);
    },[tweetList]);

    return [tweetList,setTweetList];
};

export default useTweetData;