import React from 'react'
import "../Homepage.css";

import {
  NewTweetForm,
  TweetListContainer,
} from '.';

function FeedContainer() {
  return (
    <div className='section-container feed-container'>
        <h3>Feed Container</h3>
        <NewTweetForm/>
        <TweetListContainer/>
    </div>
  )
}

export default FeedContainer