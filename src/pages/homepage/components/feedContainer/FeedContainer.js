import React,{useEffect, useRef, useState} from 'react'
import '../../homepage.css';

import NewTweetForm from './components/newTweetForm';
import TweetList from './components/tweetList';
import {getAllTweet, deleteTweet as deleteTweetService, editTweet as editTweetService} from "../../../../data/service/tweetService";

/*
{
    id:id,
    username:username,
    userid:userid,
    profilepic:profilepic,
    text:text,
    image:image,
    timestamp:timestamp,
}
*/

function FeedContainer() {

  const [editTweetData,setEditTweetData] = useState(undefined);
  const [tweetList,setTweetList] = useState([]);
  const divElementRef = useRef();

  useEffect(()=>{
    setTweetList(getAllTweet());
  },[]);

  const updateTweetList = (tweet_entity)=>{
    // console.log(tweet_entity);
    // console.log(tweetList);
    // let tempTweetList = [tweet_entity,...tweetList];
    // setTweetList(tempTweetList);
    console.log("Added");
    setTweetList([tweet_entity , ...tweetList]);
  }

  const deleteTweet = (tweet_id)=>{
    if(deleteTweetService(tweet_id)===false) return;
    let tempTweetList = [...tweetList];
    tempTweetList=tempTweetList.filter(function(tweet_item){
      return tweet_item.id!==tweet_id;
     });
    setTweetList(tempTweetList);
  }

  const editTweet = (tweet_id, tweet_text)=>{
    console.log("Updated Tweet - ",tweet_id,tweet_text);
    editTweetService(tweet_id,tweet_text);
    let tempTweetList = [...tweetList];
    let tweet;
    for(tweet of tempTweetList){
      if(tweet.id===tweet_id)
        break;
    }
    tweet.text = tweet_text;
    setTweetList(tempTweetList);
    setEditTweetData(undefined);
    console.log("Edit Successful !");
  }

  const editTweetHandler = (tweet_id,tweet_text)=>{
    console.log(tweet_id,tweet_text);
    setEditTweetData({
      tweetId: tweet_id,
      tweetText: tweet_text,
    });
    divElementRef.current.scrollTo(0, 0);
  }

  useEffect(()=>{
    console.log(tweetList);
  },[tweetList]);

  return (
    <div className='section-container feed-container' ref={divElementRef}>
        {/* <NewTweetForm newTweetHandler={updateTweetList} tweetid={editTweetId} tweettext={editTweetText}/> */}
        <NewTweetForm newTweetHandler={updateTweetList} editTweetHandler={editTweet} editTweetData={editTweetData}/>
        <TweetList tweetList={tweetList} handleTweetDelete={deleteTweet} handleTweetEdit={editTweetHandler}/>
    </div>
  )
}

export default FeedContainer