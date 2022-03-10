import React from 'react'
import "../Homepage.css";

import {
  NewTweetForm,
  TweetListContainer,
} from '.';

function FeedContainer() {
  return (
    <div className='section-container feed-container'>
        <NewTweetForm/>
        <TweetListContainer/>
    </div>
  )
}

export default FeedContainer