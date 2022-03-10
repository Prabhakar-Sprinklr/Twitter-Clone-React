import React from 'react'
import profilePic from '../../../../resources/batman2.jpeg'
import './ProfileImageViewer.css'


function ProfileImageViewer() {
  return (
    <div>
        <a href="../resources/batman-dp.jpeg">
            <div className="image-container-div">
                <img className="tweet-image profile-dp-main" src={profilePic} alt='Error in loading!'/>
            </div>
        </a>
    </div>
  )
}

export default ProfileImageViewer