import React from 'react';
import './TweetEntity.css';
import picture from '../../../../../../../../resources/batman-dp.jpeg';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TweetEntity({tweet}) {
  return (
    <article className='tweet'>
        <div>
            <img className="tweet-profile-dp" src={picture} alt="Error in Loading !" />
        </div>
        <div className="tweet-content">
            <div>
                <address className='tweet-user-data'> <span className="username-text">{tweet.username}</span> <span className="userhandle-text">@{tweet.userid}</span></address>
                <div className='tweet-text-container'>{tweet.text}</div>
            </div>
            <div>
                <img className="tweet-image" src={picture} alt="Error in Loading !" />
            </div>

            <aside className="tweet-option-button-container">
                <button className="tweet-option-button"><ThumbUpIcon /></button>
                <button className="tweet-option-button"><ShareIcon /></button>
                <button className="tweet-option-button" data-task="edit" data-tweetid={tweet.id}><EditIcon data-task="edit" data-tweetid={tweet.id}/></button>
                <button className="tweet-option-button" data-task="delete" data-tweetid={tweet.id}><DeleteForeverIcon data-task="delete" data-tweetid={tweet.id}/></button>

            </aside>
        </div>

    </article>
  )
}

export default TweetEntity