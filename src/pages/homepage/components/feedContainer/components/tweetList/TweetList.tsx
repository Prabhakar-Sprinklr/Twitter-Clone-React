import { memo } from 'react';
import TweetEntity from './components/tweetEntity';
import './tweetList.css';

type EditTweetHandlerType = {
    tweetId:string,
    text:string,
    image:string,
  };

type TweetType = {
    id: string, 
    userhandle: string, 
    username: string, 
    profilepic:string, 
    text: string, 
    image: string,
    timestamp: number,
}

type TweetListType = {
    tweetList: TweetType[],
    dispatch: (action:object)=>object,
    handleTweetEdit: ({tweetId,text,image}:EditTweetHandlerType)=>void,
}

function TweetList({tweetList,dispatch,handleTweetEdit}:TweetListType) {
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