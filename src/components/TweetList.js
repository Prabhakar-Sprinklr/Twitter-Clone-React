import React from 'react'
import TweetEntity from './TweetEntity'

function TweetList() {
  return (
    <div>
        <ul>
            <li><TweetEntity></TweetEntity></li>
            <li><TweetEntity></TweetEntity></li>
            <li><TweetEntity></TweetEntity></li>
            <li><TweetEntity></TweetEntity></li>
            <li><TweetEntity></TweetEntity></li>
        </ul>
    </div>
  )
}

export default TweetList