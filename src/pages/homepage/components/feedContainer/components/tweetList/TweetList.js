import { memo } from 'react';
import TweetEntity from './components/tweetEntity';
import './tweetList.css'


function TweetList({tweetList,handleTweetDelete,handleTweetEdit}) {
  return (
    <div>
        <ul className='tweetlist'>
            {tweetList.map((tweet)=>{
              return (
                <li key={tweet.id}>
                  <TweetEntity tweet={tweet} handleTweetDelete={handleTweetDelete} handleTweetEdit={handleTweetEdit}/>
                </li>
              );
            })}
        </ul>
    </div>
  )
}

export default memo(TweetList);