import React, { Fragment } from 'react'
import '../styles/ProfileDataViewer.css'

function ProfileDataViewer() {
  return (
    <Fragment>
        <address>
            <div className="user-profile-username center-text">PRABHAKAR KUMAR</div>
            <div className="user-profile-userid center-text">@PrabhakarKumar</div>
        </address>
        <div className="status center-text">" Learning Frontend Dev :-) "</div>
    </Fragment>
  )
}

export default ProfileDataViewer