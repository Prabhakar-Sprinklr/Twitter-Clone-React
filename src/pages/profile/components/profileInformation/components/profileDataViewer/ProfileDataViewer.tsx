import React, { Fragment } from 'react'
import './profileDataViewer.css'

function ProfileDataViewer() {
  return (
    <Fragment>
        <address>
            <div className="user-profile-information__username center-text">PRABHAKAR KUMAR</div>
            <div className="user-profile-information__userid center-text">@PrabhakarKumar</div>
        </address>
        <div className="user-profile-information__status">" Learning Frontend Dev :-) "</div>
    </Fragment>
  )
}

export default ProfileDataViewer