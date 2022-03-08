import React from 'react'
import profiePic from '../resources/batman2.jpeg'
import '../styles/ProfileImageViewer.css'


function ProfileImageViewer() {
  return (
    <div>
        <a href="../resources/batman-dp.jpeg">
            <div className="image-container-div">
                <img className="tweet-image profile-dp-main" src={profiePic} alt='Error in loading!'/>
            </div>
        </a>
    </div>
  )
}

export default ProfileImageViewer