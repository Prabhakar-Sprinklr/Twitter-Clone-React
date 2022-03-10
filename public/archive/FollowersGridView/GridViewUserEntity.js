import React from 'react';
import "../styles/FollowersEntityCommon.css";
import "./FollowersEntityGridView.css";
import profilePic from '../../../../resources/batman2.jpeg';

function GridViewUserEntity({user}) {
    const buttonTask = (user.following)?"Unfollow":"Follow";
    return (
    <li className="list-item-grid-view">
        <article className="friend-entity-grid-view">
            <div className="profile-pic-container">
                <img className="tweet-profile-dp" src={profilePic} alt="Unable to load!" />
            </div>
            <div className="friend-details-container friend-details-container-grid-view">
                <address className="username username-grid-view">
                    {user.username}
                </address>
                <address className="userid userid-grid-view">@{user.userhandle}</address>
            </div>
            <div className="friend-follow-button-container">
                <button type="button" className="follow-button" data-task={buttonTask} data-userhandle={user.userhandle}> {buttonTask} </button>
            </div>
        </article>
    </li>
    )
}

export default GridViewUserEntity