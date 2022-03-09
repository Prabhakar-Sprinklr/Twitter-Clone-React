import React from 'react'
import "../Homepage.css";
import NewTweetForm from './NewTweetForm/NewTweetForm';
import TweetList from './TweetList/TweetList';

function FeedContainer() {
  return (
    <div className='section-container feed-container'>
        <h3>Feed Container</h3>
        <NewTweetForm></NewTweetForm>
        <TweetList></TweetList>
    </div>
  )
}

export default FeedContainer