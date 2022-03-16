import React, {memo, useEffect, useState} from 'react'
import picture from "../../../../../../resources/batman-dp.jpeg";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { getPic } from '../../../../../../data/constants';
import { ACTIONS } from '../../../../../../data/constants';
import './NewTweetForm.css'

const userhandle = "userhandle";
const INIT_TWEET_TEXT = "Write Something Good !";

function NewTweetForm({newTweetHandler,editTweetHandler,editTweetData}) {

    const [tweet_text,setTweetText] = useState(INIT_TWEET_TEXT);
    const [imageName,setImageName] = useState("");

    useEffect(()=>{
        setTweetText(editTweetData?.tweetText??INIT_TWEET_TEXT);
        if(editTweetData)
            setImageName(editTweetData?.imageName??"");
    },[editTweetData])


  const submitForm = (event)=>{
    event.preventDefault();
    if(editTweetData===undefined){
        if(tweet_text.length<5 || tweet_text.length>100){
            alert("Tweet Text should be between 5 to 100 characters!");
            return;
        }
        newTweetHandler({
            type: ACTIONS.ADD_TWEET,
            payload:{userhandle,tweet_text,imageName}
        });
        setTweetText(INIT_TWEET_TEXT);
        setImageName("");
    }   
    else{
        editTweetHandler({
            id:editTweetData.tweetId,
            text:tweet_text,
            image:imageName
        });
        setTweetText(INIT_TWEET_TEXT);
        setImageName("");
    }
  };

  const updateTweetText = (event)=>{
    setTweetText(event.target.value);
  };

  const uploadImageHandler = (event)=>{
    console.log(event.target.files[0].name);
    setImageName(event.target.files[0].name);
  }

  return (
    <section className="new-tweet-area">
        <div className="new-tweet-area-profile-pic"> 
            <img className="profile-dp" src={picture} alt="Error in loading !" />     
        </div>
        <form className="new-tweet-box" onSubmit={submitForm}>
            <textarea name="tweetText" className="new-tweet-input" value={tweet_text} onChange={updateTweetText} />
            <input type="text" className={`${imageName!==""?"new-image-input":"new-image-input hide-element"}`} value={imageName} readOnly/>
            <div className={`${imageName!==""?"":"hide-element"}`}>
                <img className="preview-image" height="70px" width="70px" src={getPic(imageName)} alt='None selected/Error in loading!'/>
            </div>
            <div className='new-tweet-button-panel'>
                <label className="upload-image-button">
                    <input type="file" onChange={uploadImageHandler}/>
                    <AddPhotoAlternateIcon />
                </label>

                <button className="tweet-box-button" type="button">
                    <AttachmentIcon />
                </button>

                <button className={`${imageName!==""?"tweet-box-button remove-tweet-picture":"tweet-box-button remove-tweet-picture hide-element"}`} type="button" onClick={()=>{setImageName("")}}>
                    <DeleteSweepIcon />
                </button>

                <button type="submit" id="tweet-box-tweet-button" >Tweet</button>
            </div>
        </form>
    </section>
  )
}

export default memo(NewTweetForm);