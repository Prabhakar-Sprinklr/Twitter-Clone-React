import React from 'react';
import "../styles/FollowersEntityCommon.css";
import profilePic from '../../../../resources/batman2.jpeg';

/*
Should get the user details to render the data
*/
const ListViewUserEntity = ({user})=>{
    const buttonTask = (user.following)?"Unfollow":"Follow";
    return (
    <li>
        <article className="friend-entity">
            <div className="profile-pic-container">
                <img className="tweet-profile-dp" src={profilePic} alt="Unable to load!" />
            </div>
            <div className="friend-details-container">
                <address className="username">
                    {user.username}
                </address>
                <address className="userid">@{user.userhandle}</address>
            </div>
            <div className="friend-follow-button-container">
                <button type="button" className="follow-button" data-task={buttonTask} data-userhandle={user.userhandle}> {buttonTask} </button>
            </div>
        </article>
    </li>
    )
};

export default ListViewUserEntity;