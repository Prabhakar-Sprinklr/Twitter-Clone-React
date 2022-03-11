import React from 'react'
import '../../homepage.css';

import NewTweetForm from './components/newTweetForm';
import TweetListContainer from './components/tweetList';

function FeedContainer() {
  return (
    <div className='section-container feed-container'>
        <NewTweetForm/>
        <TweetListContainer/>
    </div>
  )
}

export default FeedContainer