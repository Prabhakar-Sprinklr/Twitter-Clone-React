import React, { useState } from 'react'
import { getAllTweet } from '../../../../../../data/service/tweetService';
import TweetList from './TweetList';

function TweetListContainer() {
  const [tweetList,setTweetList] = useState(getAllTweet());

  // useEffect(()=>{
  //   const tempTweetList = getAllTweet();
  //   setTweetList(tempTweetList);
  // });

  return (
    <TweetList tweetList={tweetList}/>
  )
}

export default TweetListContainer