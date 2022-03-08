import React from 'react'
import '../styles/Homepage.css';
import NewTweetForm from './NewTweetForm';
import TweetList from './TweetList';

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