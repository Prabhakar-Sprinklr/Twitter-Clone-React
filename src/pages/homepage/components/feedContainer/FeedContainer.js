import React,{ useRef, useState, useCallback } from 'react';
import { ACTIONS } from '../../../../data/constants';
import '../../homepage.css';
import NewTweetForm from './components/newTweetForm';
import TweetList from './components/tweetList';
import { INIT_TWEET_LIST } from '../../../../data/constants';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import reducer from "./reducer";


function FeedContainer() {

  const divElementRef = useRef();
  const [tweetList,dispatch] = useLocalStorage("tweetListLocal",INIT_TWEET_LIST,reducer);
  const [editTweetData,setEditTweetData] = useState(undefined);

  const editTweet = useCallback(({id,text,image})=>{
    const action = {
      type:ACTIONS.EDIT_TWEET,
      payload:{id,text,image,}
    };
    dispatch(action);
    setEditTweetData(undefined);
  },[dispatch]);

  const editTweetHandler = useCallback(({tweetId,text,image})=>{
    setEditTweetData({
      tweetId,
      tweetText: text,
      imageName: image,
    });
    divElementRef.current.scrollTo(0, 0);
  },[]);

  return (
    <div className='home-container__section-container feed-container' ref={divElementRef}>
        <NewTweetForm dispatch={dispatch} editTweetHandler={editTweet} editTweetData={editTweetData}/>
        <TweetList tweetList={tweetList} dispatch={dispatch} handleTweetEdit={editTweetHandler}/>
    </div>
  )
}

export default FeedContainer;