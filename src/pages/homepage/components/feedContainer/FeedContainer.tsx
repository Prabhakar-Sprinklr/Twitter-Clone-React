import React,{ useRef, useState, useCallback } from 'react';
import { ACTIONS } from '../../../../data/constants';
import '../../homepage.css';
import NewTweetForm from './components/newTweetForm';
import TweetList from './components/tweetList';
import { INIT_TWEET_LIST } from '../../../../data/constants';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import reducer from "./reducer";
import {EditTweetInformationType, EditTweetParameterType, EditTweetHandlerType, TweetType, DispatchFunctionType} from "./types";


function FeedContainer() {

  const divElementRef = useRef<HTMLDivElement>(null);
  const [tweetList,dispatch] = useLocalStorage("tweetListLocal",INIT_TWEET_LIST,reducer);
  const [editTweetData,setEditTweetData] = useState<EditTweetInformationType | undefined>(undefined);

  const editTweet = useCallback(({id,text,image}:EditTweetParameterType)=>{
    const action = {
      type:ACTIONS.EDIT_TWEET,
      payload:{id,text,image,}
    };
    (dispatch as React.Dispatch<object>)(action);
    setEditTweetData(undefined);
  },[dispatch]);

  const editTweetHandler = useCallback(({tweetId,text,image}:EditTweetHandlerType)=>{
    setEditTweetData({
      tweetId,
      tweetText: text,
      imageName: image,
    });
    //divElementRef?.current?.scrollTo(0, 0);
  },[]);

  return (
    <div className='home-container__section-container feed-container' ref={divElementRef}>
        <NewTweetForm dispatch={dispatch as DispatchFunctionType} editTweetHandler={editTweet} editTweetData={editTweetData as EditTweetInformationType}/>
        <TweetList tweetList={tweetList as TweetType[]} dispatch={dispatch as DispatchFunctionType} handleTweetEdit={editTweetHandler}/>
    </div>
  )
}

export default FeedContainer;