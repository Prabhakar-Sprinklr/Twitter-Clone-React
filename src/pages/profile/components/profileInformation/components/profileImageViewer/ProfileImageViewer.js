import React from 'react'
import profilePic from '../../../../../../resources/batman-dp.jpeg'
import './profileImageViewer.css'


function ProfileImageViewer() {
  return (
    <div>
        <a href="../resources/batman-dp.jpeg">
            <div className="image-container-div">
                <img className="image-container-div__profile-dp-main" src={profilePic} alt='Error in loading!'/>
            </div>
        </a>
    </div>
  )
}

export default ProfileImageViewer