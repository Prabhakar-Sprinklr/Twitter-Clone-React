import React from 'react';
import "../styles/FollowersEntityCommon.css";
import "./FollowersEntityGridView.css";
import profilePic from '../../../../resources/batman2.jpeg';

/*
Should get the user details to render the data
*/
function GridViewUserEntity() {
  return (
    <li className="list-item-grid-view">
        <article className="friend-entity-grid-view">
            <div className="profile-pic-container">
                <img className="tweet-profile-dp" src={profilePic} alt="Unable to load!" />
            </div>
            <div className="friend-details-container friend-details-container-grid-view">
                <address className="username username-grid-view">
                    BATMAN CLONE
                </address>
                <address className="userid userid-grid-view">@BatID</address>
            </div>
            <div className="friend-follow-button-container">
                <button type="button" className="follow-button"> Follow </button>
            </div>
        </article>
    </li>
  )
}

export default GridViewUserEntity