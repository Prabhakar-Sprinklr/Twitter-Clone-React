import React, {useEffect, useState} from 'react'
import picture from "../../../../../../resources/batman-dp.jpeg";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { addNewTweet } from '../../../../../../data/service/tweetService';
import './NewTweetForm.css'

const userhandle = "userhandle";
const INIT_TWEET_TEXT = "Write Something Good !";

function NewTweetForm(props) {
    // console.log("Now - ",props.editTweetData?.tweetText);
    const initial_text = props.editTweetData?.tweetText??INIT_TWEET_TEXT;
    const [tweet_text,setTweetText] = useState(initial_text);

    useEffect(()=>{
        setTweetText(props.editTweetData?.tweetText??INIT_TWEET_TEXT)
    },[props])

  const submitForm = (event)=>{
    event.preventDefault();
    if(props.editTweetData===undefined){
        const response_entity = addNewTweet({userhandle,tweet_text});
        if(response_entity.response===true){
            props.newTweetHandler(response_entity.tweet_entity);
            setTweetText(INIT_TWEET_TEXT);
        }   
    }
    else{
        props.editTweetHandler(props.editTweetData.tweetId,tweet_text);
    }
  };

  const updateTweetText = (event)=>{
    setTweetText(event.target.value);
  }

  return (
    <section className="new-tweet-area">
        <div className="new-tweet-area-profile-pic"> 
            <img className="profile-dp" src={picture} alt="Error in loading !" />     
        </div>
        <form className="new-tweet-box" onSubmit={submitForm}>
            <textarea name="tweetText" className="new-tweet-input" value={tweet_text} onChange={updateTweetText} />
            <input type="text" className="new-image-input hide-element"/>
            <div className='hide-element'>
                <img className="preview-image" height="70px" width="70px" />
            </div>
            <div className='new-tweet-button-panel'>
                <label className="upload-image-button">
                    <input type="file" />
                    <AddPhotoAlternateIcon />
                </label>

                <button className="tweet-box-button" type="button">
                    <AttachmentIcon />
                </button>

                <button className="tweet-box-button remove-tweet-picture hide-element" type="button">
                    <span className="material-icons">layers_clear</span>
                </button>
                <button type="submit" id="tweet-box-tweet-button" >Tweet</button>
            </div>
        </form>
    </section>
  )
}

export default NewTweetForm