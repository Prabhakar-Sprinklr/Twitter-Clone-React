import { memo } from 'react';
import TweetEntity from './components/tweetEntity';
import './tweetList.css';
import {TweetType, EditTweetHandlerType} from "../../types";

type TweetListProps = {
    tweetList: TweetType[],
    dispatch: (action:object)=>object,
    handleTweetEdit: ({tweetId,text,image}:EditTweetHandlerType)=>void,
}

function TweetList({tweetList,dispatch,handleTweetEdit}:TweetListProps) {
  return (
    <div>
        <ul className='tweet-list'>
            {tweetList.map((tweet)=>{
              return (
                <li key={tweet.id}>
                  <TweetEntity tweet={tweet} dispatch={dispatch} handleTweetEdit={handleTweetEdit}/>
                </li>
              );
            })}
        </ul>
    </div>
  )
}

export default memo(TweetList);