import React,{ useRef, useState, useMemo, useCallback } from 'react';
import { ACTIONS } from '../../../../data/constants';
import useTweetData from '../../../../hooks/useTweetData';
import useUserData from '../../../../hooks/useUserData';
import '../../homepage.css';
import NewTweetForm from './components/newTweetForm';
import TweetList from './components/tweetList';


function FeedContainer() {

  const divElementRef = useRef();
  const [tweetList,dispatch] = useTweetData();
  const {getUserEntity} = useUserData();
  const [editTweetData,setEditTweetData] = useState(undefined);
  
  const tweetEntityList=useMemo(()=>{
    let tempTweetList = tweetList.map((tweet)=>{
      const userhandle = tweet.userhandle;
      const user_entity = getUserEntity(userhandle);
      return {
        id:tweet.id,
        username:user_entity.username,
        userid:userhandle,
        profilepic:user_entity.profilepic,
        text:tweet.text,
        image:tweet.image,
        timestamp:tweet.timestamp,
      }
    });
    tempTweetList.sort((a,b)=>(b.timestamp-a.timestamp));
    return tempTweetList;
  },[tweetList,getUserEntity]);

  const editTweet = ({id,text,image})=>{
    const action = {
      type:ACTIONS.EDIT_TWEET,
      payload:{id,text,image,}
    };
    dispatch(action);
    setEditTweetData(undefined);
  };

  const editTweetHandler = useCallback(({tweetId,text,image})=>{
    setEditTweetData({
      tweetId,
      tweetText: text,
      imageName: image,
    });
    divElementRef.current.scrollTo(0, 0);
  },[]);

  return (
    <div className='section-container feed-container' ref={divElementRef}>
        <NewTweetForm newTweetHandler={dispatch} editTweetHandler={editTweet} editTweetData={editTweetData}/>
        <TweetList tweetList={tweetEntityList} handleTweetDelete={dispatch} handleTweetEdit={editTweetHandler}/>
    </div>
  )
}

export default FeedContainer;