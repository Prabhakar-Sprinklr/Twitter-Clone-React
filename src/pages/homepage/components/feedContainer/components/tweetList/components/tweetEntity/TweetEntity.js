import React, { useCallback } from 'react';
import './tweetEntity.css';
import picture from '../../../../../../../../resources/batman-dp.jpeg';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import getPic from '../../../../../../../../utils/getPic';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ACTIONS } from '../../../../../../../../data/constants';

function TweetEntity({tweet,handleTweetDelete,handleTweetEdit}) {

    const handleDelete = useCallback(()=>{
        handleTweetDelete(
            {
                type:ACTIONS.REMOVE_TWEET,
                payload:{tweetId:tweet.id},
            }
        );
    },[handleTweetDelete,tweet.id]);

    const handleEdit = useCallback(()=>{
        handleTweetEdit({
            tweetId:tweet.id, 
            text:tweet.text, 
            image:tweet.image
        });
    },[handleTweetEdit,tweet]);

  return (
    <article className='tweet'>
        <div>
            <img className="tweet__profile-dp" src={picture} alt="Error in Loading !" />
        </div>
        <div className="tweet__content">
            <div>
                <address className='tweet__content__user-data'> 
                    <span className="tweet__content__user-data__username">{tweet.username}</span> 
                    <span className="tweet__content__user-data__userhandle">@{tweet.userhandle}</span>
                </address>
                <div className='tweet__content__text'>{tweet.text}</div>
            </div>
            <div>
                <img className="tweet__content__image" src={getPic(tweet.image)} alt="Error in Loading !" />
            </div>

            <aside className="tweet__option-button-panel">
                <button className="tweet__option-button-panel__tweet-option-button"><ThumbUpIcon /></button>
                <button className="tweet__option-button-panel__tweet-option-button"><ShareIcon /></button>
                <button className="tweet__option-button-panel__tweet-option-button" onClick={handleEdit} ><EditIcon data-task="edit" data-tweetid={tweet.id}/></button>
                <button className="tweet__option-button-panel__tweet-option-button" onClick={handleDelete}><DeleteForeverIcon data-task="delete" data-tweetid={tweet.id}/></button>

            </aside>
        </div>

    </article>
  )
}

export default TweetEntity;