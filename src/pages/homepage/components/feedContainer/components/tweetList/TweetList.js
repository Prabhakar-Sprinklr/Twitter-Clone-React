import { memo } from 'react';
import TweetEntity from './components/tweetEntity';
import './tweetList.css'


function TweetList({tweetList,dispatch,handleTweetEdit}) {
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