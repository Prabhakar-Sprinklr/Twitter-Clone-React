import React from 'react'
import picture from "../../../../../../resources/batman-dp.jpeg";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './NewTweetForm.css'

const userhandle = "userhandle";

function NewTweetForm() {

  const submitForm = (event)=>{
    event.preventDefault();
    const tweetText = event.target.elements.tweetText.value;
    // if(addNewTweet({userhandle,tweetText})===false){
    //     console.log("Error in Tweet Submission !");
    //     return;
    // }
    console.log("New Tweet Submitted !");
  };

  return (
    <section className="new-tweet-area">
        <div className="new-tweet-area-profile-pic"> 
            <img className="profile-dp" src={picture} alt="Error in loading !" />     
        </div>
        <form className="new-tweet-box" onSubmit={submitForm}>
            <textarea name="tweetText" className="new-tweet-input" defaultValue="Write Something Good !"/>
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